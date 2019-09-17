import { observable, action } from 'mobx'
import ApiService from './ApiService'

const post = {
  title: 'Use AMP to build great experiences across the web',
  by: {
    name: 'Unknown author',
    title: 'Prozak news',
  },
  image:
    'http://prozak.local/var/prozak/storage/images/media/images/google-amp22/394441-1-ukr-UA/Google-AMP2.jpg',
  url: 'http://prozak.local/content/view/full/55105',
  publicationDate: '1568709660000',
  shortDescription:
    '<p>Whether you are a publisher, e-commerce company, storyteller, advertiser or email sender, AMP makes it easy to create great experiences on the web. Use AMP to build:</p>',
  description:
    '<a name="eztoc394432_1" id="eztoc394432_1"></a><h2>\nWhat is<br />AMP?</h2><a name="eztoc394432_1_0_0_0_1" id="eztoc394432_1_0_0_0_1"></a><h6>Web pages that are compelling, smooth, and load near instantaneously</h6><p>AMP is a simple and robust format to ensure your website is fast, user-first, and makes money. AMP provides long-term success for your web strategy with distribution across popular platforms and reduced operating and development costs.</p>\n<div class="">    <a href="/prozak_api/content/view/full/55106">Google-AMP2</a></div><p>asdasda sdetest test image</p>',
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
