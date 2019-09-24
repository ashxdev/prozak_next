import { observable, action } from 'mobx'
import ApiService from './ApiService'

class UIStore {
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
