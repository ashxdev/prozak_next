import { observable, action } from "mobx"
const post = {
  title: "Post title",
}

class PostStore {
  @observable post = null

  endpoint = "post"

  constructor(initialData = {}) {
    this.post = initialData.post
  }

  async fetch(id) {
    //TODO: get req by service
    //  const response = await makeFetchRequest(`${this.endpoint}/${id}/`);
    const response = post
    this.setPost(response)
  }

  @action setPost(post) {
    this.post = post
  }
}

export default PostStore
