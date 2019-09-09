export const api = {
  url: () => `http://localhost/api/v1/`,
  points: {
    posts: {
      get: () => "posts",
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
