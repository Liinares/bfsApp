const Personform = ({ handleSubmit, handleNameChange, handlePhoneChange, newName, newNumber }) => {
  return (
    <div>
      <h3> Create new Person</h3>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handlePhoneChange} value={newNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default Personform
