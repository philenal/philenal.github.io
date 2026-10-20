import { useEffect, useRef, useState } from 'react'
import { ArtLightboxBackdrop, ArtLightboxClose, ArtLightboxFigure, ArtLightboxImage, FlexContainerCol, FlexContainerRow, SwanFeature } from './styles'
import ImageCard from './ImageCard';


function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('/public/art', false, /\.(png|jpe?g|svg|gif|GIF|PNG|JPE?G)$/));

export default function OverlayArt() {
  const [open, setOpen] = useState(null)
  const closeRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      triggerRef.current?.focus()
    }
  }, [open])

  const openArt = (src, alt, trigger) => {
    if (!src) return
    triggerRef.current = trigger || null
    setOpen({ src, alt })
  }

  // remove duplicates
  const imagesSet = new Set(images);
  const newImages = [...imagesSet];
  const imageCards = newImages.map((image, index) => {
    const src = typeof image === 'string' ? image : image.src
    return <ImageCard key={src ? `${src}-${index}` : index} image={image} onOpen={openArt}/>
  })

  return (
    <>
      <FlexContainerCol>
        <div><h1>art</h1></div>
        <SwanFeature
          type="button"
          aria-label="View handmade swan drawing larger"
          onClick={(event) => openArt('/Cloud-Swan.png', 'handmade swan drawing', event.currentTarget)}
        >
          <img src="/Cloud-Swan.png" alt="handmade swan drawing" />
        </SwanFeature>
        <FlexContainerRow>
          {imageCards}
        </FlexContainerRow>
      </FlexContainerCol>
      {open ? (
        <ArtLightboxBackdrop onClick={() => setOpen(null)}>
          <ArtLightboxClose
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={(event) => {
              event.stopPropagation()
              setOpen(null)
            }}
          >
            ×
          </ArtLightboxClose>
          <ArtLightboxFigure
            role="dialog"
            aria-modal="true"
            aria-label={open.alt || 'Artwork'}
            onClick={(event) => event.stopPropagation()}
          >
            <ArtLightboxImage src={open.src} alt={open.alt || 'Artwork'} />
          </ArtLightboxFigure>
        </ArtLightboxBackdrop>
      ) : null}
    </>
  )
}