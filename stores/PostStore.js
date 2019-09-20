import { observable, action } from 'mobx'
import ApiService from './ApiService'
class PostStore {
  @observable posts = null
  @observable article = null

  constructor() {
    this.ApiService = new ApiService('posts')
    this.apiMethods = this.ApiService.apiMethods
  }

  async fetchPosts(parentId) {
    const response = await this.ApiService.call({
      action: this.apiMethods.get,
      params: { parent_id: parentId },
    })

    this.setPosts(response)
  }

  async fetchArticle(id) {
    const response = await this.ApiService.call({
      action: this.apiMethods.article,
      params: { id },
    })

    this.setArticle(response)
  }

  @action setPosts({ posts }) {
    this.posts = posts
  }

  @action setArticle(article) {
    this.article = article
  }
}

export default PostStore
