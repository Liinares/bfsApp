import axios from 'axios'

export const loginService = (credentials) => {
  return axios.post('/api/login', credentials)
    .then(response => {
      const { data } = response
      return data
    })
}
