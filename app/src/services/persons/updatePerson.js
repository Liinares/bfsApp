import axios from 'axios'

export const updatePerson = ({ name, number, id }) => {
  return axios.put(`/api/persons/${id}`, { name, number })
    .then(response => {
      const { data } = response
      return data
    })
}
