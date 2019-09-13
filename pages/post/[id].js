import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import AmpPost from '../../components/amp/post'
import Layout from '../../components/layouts/Layout'

@inject('postStore')
@observer
class Post extends Component {
  static async getInitialProps({ mobxStore, query }) {
    await mobxStore.postStore.fetch(query.id)
    return { post: mobxStore.postStore.post }
  }

  render() {
    const { post } = this.props
    return (
      <Layout>
        <AmpPost post={post} />
      </Layout>
    )
  }
}

export default Post
