import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import AmpPost from '../../components/amp/post/AmpPost'
import Layout from '../../components/layouts/Layout'
import Meta from '../../components/heads/Meta'

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

    const meta = {
      title: article.metaTitle,
      keywords: article.metaKeywords,
      description: article.shortDescription,
    }

    return { article, settings, meta }
  }

  render() {
    const { article, settings, meta } = this.props

    return (
      <Layout {...settings}>
        <Meta {...meta} />
        <AmpPost article={article} />
      </Layout>
    )
  }
}

export const config = { amp: true }
export default Post
