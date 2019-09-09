import { useStaticRendering } from "mobx-react"

import PostStore from "./PostStore"
import UIStore from "./UIStore"

const isServer = typeof window === "undefined"
useStaticRendering(isServer)

let store = null

export default function initializeStore() {
  if (isServer) {
    return {
      postStore: new PostStore(),
      uiStore: new UIStore(),
    }
  }
  if (store === null) {
    store = {
      postStore: new PostStore(),
      uiStore: new UIStore(),
    }
  }

  return store
}
