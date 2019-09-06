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
          <style amp-custom jsx global>
            {globalStyles}
          </style>
          <script
            async
            custom-element="amp-carousel"
            src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default ProzakApp
