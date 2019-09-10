import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { Provider } from 'mobx-react'
import initializeStore from '../stores/stores'

import globalStyles from '../static/style.js'

import Layout from '../components/layouts/Layout'

class ProzakApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore()

    appContext.ctx.mobxStore = mobxStore
    const appProps = await App.getInitialProps(appContext)
    return {
      ...appProps,
      initialMobxState: mobxStore,
    }
  }

  constructor(props) {
    super(props)
    const isServer = typeof window === 'undefined'
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider {...this.mobxStore}>
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
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default ProzakApp
