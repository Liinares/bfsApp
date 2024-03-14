const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>CountryDetails</h2>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages:</p>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => {
          return (<li key={value}>{value}</li>)
        })}
      </ul>
      <img src={country.flags.png} alt='Country Flag' />
    </div>
  )
}

export default CountryDetails
