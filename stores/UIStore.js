import { observable, action } from 'mobx'
import ApiService from './ApiService'

const hardCodedCards = [
  {
    id: '1',
    title: 'Use AMP to build great experiences across the web',
    image:
      'http://prozak.local/var/prozak/storage/images/media/images/google-amp22/394441-1-ukr-UA/Google-AMP2.jpg',
    category: 'Design',
    publicationDate: '1568709660000',
    shortDescription:
      'Whether you are a publisher, e-commerce company, storyteller, advertiser or email sender, AMP makes it easy to create great experiences on the web. Use AMP to build:',
  },
  {
    id: '2',
    title: 'Office Tour: Studio Serif more text here to wrap',
    image: '/static/img/land-see/studio-310px.jpg',
    category: 'Design',
    publicationDate: '1568797531490',
    shortDescription:
      'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
  },
  {
    id: '3',
    title: 'Office Tour: Some another kind of news',
    image: '/static/img/land-see/studio-310px.jpg',
    category: 'Design',
    publicationDate: '1568709660000',
    shortDescription:
      'In the heart of the southeast, Studio Serif stands out among its competitors for its complex mixture of hand-drawn and computer-generated art coming together in beautifully, cohesive designs.',
  },
]
const hardCodedData = [
  {
    id: '1',
    postUrl: '',
    title: 'test title',
    description: 'test desc',
    imgSrc: 'https://unsplash.it/500/400',
  },
  {
    id: '2',
    postUrl: '',
    title: 'test title2',
    description: 'test desc3',
    imgSrc: 'https://unsplash.it/500/400',
  },
  {
    id: '3',
    postUrl: '',
    title: 'test titl3',
    description: 'test desc3',
    imgSrc: 'https://unsplash.it/500/400',
  },
]

class UIStore {
  @observable data = hardCodedData
  @observable cards = hardCodedCards
  @observable settings = null

  endpoint = 'settings'

  constructor() {
    this.ApiService = new ApiService('settings')
    this.apiMethods = this.ApiService.apiMethods
  }

  async fetchSettings() {
    const response = await this.ApiService.call({ action: this.apiMethods.get })
    this.setSettings(response)
  }

  @action setSettings(settings) {
    this.settings = settings
  }
}

export default UIStore
