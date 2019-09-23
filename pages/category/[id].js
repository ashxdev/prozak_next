import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Layout from '../../components/layouts/Layout'
import AmpEagle from '../../components/amp/eagle/AmpEagle'

@inject('postStore')
@inject('uiStore')
@observer
class Post extends Component {
  static async getInitialProps({ mobxStore, query }) {
    await Promise.all([
      mobxStore.uiStore.fetchSettings(),
      mobxStore.postStore.fetchPosts(query.id),
    ])

    const {
      uiStore: { settings },
      postStore: { posts },
    } = mobxStore

    const flatMenu = settings.menu.reduce((acc, cur) => {
      return [...acc, cur, ...cur.subMenu]
    }, [])

    const categoryName = flatMenu.find(item => item.id === query.id).title

    return { posts, settings, categoryName }
  }

  render() {
    const { posts, settings, categoryName } = this.props

    return (
      <Layout {...settings}>
        <h1 className="center land-see-post-category land-see-page-navigation pt1 caps">
          {categoryName}
        </h1>
        <AmpEagle items={posts} />
      </Layout>
    )
  }
}

export const config = { amp: true }
export default Post
