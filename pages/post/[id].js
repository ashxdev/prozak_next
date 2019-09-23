import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import AmpPost from '../../components/amp/post/AmpPost'
import Layout from '../../components/layouts/Layout'

@inject('postStore')
@inject('uiStore')
@observer
class Post extends Component {
  static async getInitialProps({ mobxStore, query }) {
    await Promise.all([
      mobxStore.uiStore.fetchSettings(),
      mobxStore.postStore.fetchArticle(query.id),
    ])

    const {
      uiStore: { settings },
      postStore: { article },
    } = mobxStore

    return { article, settings }
  }

  render() {
    const { article, settings } = this.props

    return (
      <Layout {...settings}>
        <AmpPost article={article} />
      </Layout>
    )
  }
}

export const config = { amp: true }
export default Post
