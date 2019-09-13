import { observable, action } from 'mobx'
import ApiService from './ApiService'

const post = {
  title: 'Post title - news in zakarpattya',
  by: {
    name: 'Vitya & Tanya',
    title: 'Prozak news',
  },
  timeStamp: 1568127930062,
  body: 'Hello body',
}
class PostStore {
  @observable post = null

  endpoint = 'post'

  constructor() {
    this.ApiService = new ApiService('posts')
    this.apiMethods = this.ApiService.apiMethods
  }

  async fetch(id) {
    //TODO: get req by ApiService
    //  const response = await makeFetchRequest(`${this.endpoint}/${id}/`);
    // this.ApiService.call({ action: this.apiMethods.get })
    const response = post
    this.setPost(response)
  }

  @action setPost(post) {
    this.post = post
  }
}

export default PostStore
