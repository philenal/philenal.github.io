import React from 'react';
import { ArtOpenButton, CardContainer } from './styles';
import Image from 'next/image';

function artSrc(image) {
    if (typeof image === 'string') return image
    if (image && typeof image.src === 'string') return image.src
    if (image && image.default) return artSrc(image.default)
    return ''
}

export default function ImageCard(props) {
    const { image, onOpen } = props;
    const src = artSrc(image)
    return (
        <CardContainer>
            <ArtOpenButton
                type="button"
                aria-label="View artwork larger"
                onClick={(event) => onOpen(src, 'artwork', event.currentTarget)}
            >
                <Image src={image} alt="" width={640} height={800} style={{ width: '100%', height: 'auto' }}/>
            </ArtOpenButton>
        </CardContainer>
    )
}