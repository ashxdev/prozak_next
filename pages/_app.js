import React from "react"
import App from "next/app"
import Head from "next/head"

import globalStyles from "../static/style.js"

import Layout from "../components/layouts/Layout"

class ProzakApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Head>
          <style amp-custom jsx>
            {globalStyles}
          </style>
          <script
            async
            key="amp-timeago"
            custom-element="amp-timeago"
            src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
          />
        </Head>
        <p>Some time: {new Date().toJSON()}</p>
        <amp-timeago
          width="0"
          height="15"
          datetime={new Date().toJSON()}
          layout="responsive"
        >
          .
        </amp-timeago>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default ProzakApp
