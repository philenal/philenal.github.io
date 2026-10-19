import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// configure-pages injects `basePath` into next.config.js ("" on this user site,
// "/repo" on a project site) and does not set `assetPrefix`. Public files are
// served under basePath; assetPrefix only rewrites /_next/ assets.
const basePath = process.env.__NEXT_ROUTER_BASEPATH || ''

function asset(path) {
  return `${basePath}${path}`
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={asset('/favicon.ico')} sizes="any" />
          <link rel="icon" type="image/png" sizes="48x48" href={asset('/favicon-48x48.png')} />
          <link rel="icon" type="image/png" sizes="32x32" href={asset('/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={asset('/favicon-16x16.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={asset('/apple-touch-icon.png')} />
          <link rel="icon" type="image/png" sizes="192x192" href={asset('/icon-192.png')} />
          <link rel="icon" type="image/png" sizes="512x512" href={asset('/icon-512.png')} />
          <link rel="manifest" href={asset('/site.webmanifest')} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
