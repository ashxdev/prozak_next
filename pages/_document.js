import Document, { Html, Head, Main, NextScript } from 'next/document'
import globalStyles from '../static/style'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            custom-element="amp-carousel"
            src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
          />
          <script
            async
            custom-element="amp-sidebar"
            src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
          ></script>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <style amp-custom jsx global>
            {globalStyles}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
