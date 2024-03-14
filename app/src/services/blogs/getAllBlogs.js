import axios from 'axios'

export const getAllBlogs = () => {
  return axios.get('/api/blogs')
    .then((response) => {
      const { data } = response
      return data
    })
}
