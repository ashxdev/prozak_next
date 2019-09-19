export const api = {
  url: () => `http://prozak.local/prozak_api/api_content/`,
  points: {
    settings: {
      get: () => 'get_settings',
    },
    posts: {
      get: () => 'posts',
    },
    post: {
      get: uuid => `post/${uuid}`,
    },
  },
}

export const apiStringify = moduleName => {
  return Object.keys(api.points[moduleName]).reduce((acc, prop) => {
    acc[prop] = prop

    return acc
  }, {})
}
