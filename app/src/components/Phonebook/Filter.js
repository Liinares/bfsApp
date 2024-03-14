const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <h3> Filters</h3>
      <div>
        Filter shown with: <input onChange={handleFilterChange} value={filter} />
      </div>
    </div>
  )
}

export default Filter
