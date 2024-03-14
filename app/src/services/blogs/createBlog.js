import axios from 'axios'

export const createBlog = (blog, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.post('/api/blogs', blog, config)
    .then(response => {
      const { data } = response
      return data
    })
}
