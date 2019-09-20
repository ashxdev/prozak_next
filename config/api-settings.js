export const api = {
  url: () => `http://prozak.info/prozak_api/api_content/`,
  points: {
    settings: {
      get: () => 'get_settings',
    },
    posts: {
      get: () => 'get_last_posts',
      article: () => 'get_article',
    },
  },
}

export const apiStringify = moduleName => {
  return Object.keys(api.points[moduleName]).reduce((acc, prop) => {
    acc[prop] = prop

    return acc
  }, {})
}
