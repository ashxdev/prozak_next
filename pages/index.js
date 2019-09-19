import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import AmpCarousel from '../components/amp/carousel/AmpCarousell'
import AmpCards from '../components/amp/cards/AmpCards'
import AmpEagle from '../components/amp/eagle/AmpEagle'
import Layout from '../components/layouts/Layout'

@inject('uiStore')
@observer
class Page extends Component {
  static async getInitialProps({ mobxStore }) {
    await mobxStore.uiStore.fetchSettings()

    const { cards, data, settings } = mobxStore.uiStore

    return { cards, data, settings }
  }

  render() {
    const { data, cards, settings } = this.props
    return (
      <Layout {...settings}>
        <AmpCarousel data={data} />
        <AmpEagle items={cards} />
        <AmpCards cards={cards} />
      </Layout>
    )
  }
}

export const config = { amp: true }
export default Page
