import axios from 'axios'

export const getCountries = () => {
  return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then((response) => {
      const { data } = response
      return data
    })
}
