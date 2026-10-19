import localFont from 'next/font/local'
import {
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Nunito_Sans,
  Outfit,
  Source_Sans_3,
  Syne,
} from 'next/font/google'

const aqua = localFont({
  src: [
    { path: '../public/fonts/aqua.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/aqua.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-aqua',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-source-sans',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

// Change this one line to switch the live site.
//   aqua              current rounded display face for headings and body
//   aqua-outfit       aqua headings, Outfit body (recommended)
//   fraunces-source   Fraunces headings, Source Sans 3 body
//   syne-dm           Syne headings, DM Sans body
//   cormorant-nunito  Cormorant Garamond headings, Nunito Sans body
//   cormorant-outfit  Cormorant Garamond headings, Outfit body
export const ACTIVE_PAIRING = 'cormorant-outfit'

export const PAIRINGS = {
  aqua: {
    label: 'Aqua',
    heading: '--font-aqua',
    body: '--font-aqua',
    description: 'The current rounded display face for everything.',
  },
  'aqua-outfit': {
    label: 'Aqua + Outfit',
    heading: '--font-aqua',
    body: '--font-outfit',
    description: 'Signature aqua wordmark with a clean geometric body.',
  },
  'fraunces-source': {
    label: 'Fraunces + Source Sans 3',
    heading: '--font-fraunces',
    body: '--font-source-sans',
    description: 'Soft editorial serif headings and a plain reading face.',
  },
  'syne-dm': {
    label: 'Syne + DM Sans',
    heading: '--font-syne',
    body: '--font-dm-sans',
    description: 'Contemporary geometric display with a neutral sans body.',
  },
  'cormorant-nunito': {
    label: 'Cormorant + Nunito Sans',
    heading: '--font-cormorant',
    body: '--font-nunito-sans',
    description: 'High-contrast elegant serif with a rounded friendly body.',
  },
  'cormorant-outfit': {
    label: 'Cormorant + Outfit',
    heading: '--font-cormorant',
    body: '--font-outfit',
    description: 'Soft serif headings on a butter sky, with a plain sans body.',
  },
}

const loaded = [aqua, outfit, fraunces, sourceSans, syne, dmSans, cormorant, nunitoSans]

export const fontVariableClassName = loaded.map((font) => font.variable).join(' ')

const active = PAIRINGS[ACTIVE_PAIRING]

export const FontRoot = ({ className = '', children }) => children && (
  <div
    id="site-root"
    data-font={ACTIVE_PAIRING}
    className={[fontVariableClassName, className].filter(Boolean).join(' ')}
    style={{
      '--font-heading': `var(${active.heading})`,
      '--font-body': `var(${active.body})`,
    }}
  >
    {children}
  </div>
)
