import { useState, useEffect } from 'react'
import Filter from './Filter'
import Personform from './Personform'
import Persons from './Persons'
import { getAllPersons } from '../../services/persons/getAllPersons'
import { createPerson } from '../../services/persons/createPerson'
import { deletePerson } from '../../services/persons/deletePerson'
import { updatePerson } from '../../services/persons/updatePerson'

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllPersons()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  console.log(persons)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newName.length === 0 || newNumber.length === 0) {
      window.alert('Complete all fields')
    } else {
      const foundPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

      if (foundPerson) {
        if (window.confirm(`${newName} is already added to phonebook, replace old number(${foundPerson.number}) with the new one(${newNumber})?`)) {
          const personToUpdate = {
            name: foundPerson.name,
            number: newNumber,
            id: foundPerson.id
          }

          updatePerson(personToUpdate)
            .then(response => {
              const updatedPersons = persons.map(person => {
                if (person.name.toLowerCase() === personToUpdate.name.toLowerCase()) {
                  return personToUpdate
                }
                return person
              })

              setPersons(updatedPersons)
            })
            .catch(error => {
              window.alert(error.response.data.error)
            })
        }
      } else {
        const personToCreate = {
          name: newName,
          number: newNumber
        }

        createPerson(personToCreate)
          .then(response => {
            setPersons(persons.concat({ name: newName, number: newNumber, id: response.id }))

            window.alert(`${newName} with number ${newNumber} has been added to phonebook`)
          })
          .catch(error => {
            window.alert(error.response.data.error)
          })
      }

      setNewName('')
      setNewewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      deletePerson(id)
        .then(response => {
          const newPersons = persons.filter(pers => pers.id !== id)

          setPersons(newPersons)
        })
        .catch(error => {
          console.log(`Error ${error}`)
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Personform
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        newName={newName}
        newNumber={newNumber}
      />

      <Persons persons={persons} filter={filter} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default Phonebook
