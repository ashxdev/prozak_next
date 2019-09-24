import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import AmpCarousel from '../components/amp/carousel/AmpCarousell'
import AmpCards from '../components/amp/cards/AmpCards'
import AmpEagle from '../components/amp/eagle/AmpEagle'
import Layout from '../components/layouts/Layout'
import Meta from '../components/heads/Meta'

@inject('uiStore')
@inject('postStore')
@observer
class Page extends Component {
  static async getInitialProps({ mobxStore }) {
    await Promise.all([
      mobxStore.uiStore.fetchSettings(),
      mobxStore.postStore.fetchPosts(),
    ])

    const {
      uiStore: { settings },
      postStore: { posts, cardsPosts },
    } = mobxStore

    return { settings, posts, cardsPosts }
  }

  render() {
    const { settings, posts: allPosts, cardsPosts } = this.props
    const [p1, p2, p3, p4, ...posts] = allPosts

    return (
      <Layout {...settings}>
        <Meta />
        <AmpCarousel data={[p1, p2, p3, p4]} />
        <AmpEagle items={posts} />
        <AmpCards cards={cardsPosts} />
      </Layout>
    )
  }
}

export const config = { amp: true }
export default Page
