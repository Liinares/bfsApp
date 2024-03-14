const Persons = ({ persons, filter, handleDeletePerson }) => {
  return (
    <div>
      <h3>Persons</h3>
      <ul>
        {persons
          .filter((person) => {
            return person.name.toLowerCase().startsWith(filter.toLowerCase())
          })
          .map((person) => {
            return (
              <li className='persons' key={person.id}>
                {person.name}, {person.number}, <button onClick={() => { handleDeletePerson(person.id, person.name) }}>Delete</button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Persons
