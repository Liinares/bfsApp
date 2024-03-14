import { useEffect, useState } from 'react'
import { getCountries } from '../../services/countries/getCountries'
import CountryDetails from './CountryDetails'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [inputCountry, setInputCountry] = useState('')
  const [showCountry, setShowCountry] = useState({})
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    getCountries()
      .then(response => {
        setCountries(response)
      })
  }, [])

  useEffect(() => {
    const filtered = countries
      .filter(res =>
        res.name.common.toLowerCase().includes(inputCountry.toLowerCase())
      )
    setFilteredCountries(filtered)
  }, [inputCountry, countries])

  const handleCountryChange = (event) => {
    setInputCountry(event.target.value)
    setShowCountry({})
  }

  const handleButtonShow = (country) => {
    setShowCountry(country)
  }

  if (countries.length === 0) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div>
      <h1> Countries </h1>
      find countries <input onChange={handleCountryChange} value={inputCountry} />
      {
                Object.keys(showCountry).length !== 0
                  ? (<CountryDetails country={showCountry} />)
                  : (filteredCountries.length === 1
                      ? (
                        <CountryDetails country={filteredCountries[0]} />
                        )
                      : filteredCountries.length <= 10
                        ? (
                          <div>
                            {filteredCountries.map(cntry =>
                              <p key={cntry.name.common}> {cntry.name.common} <button onClick={() => { handleButtonShow(cntry) }}>Show</button></p>)}
                          </div>
                          )
                        : (
                          <p>Too many matches, specify another filter</p>
                          )
                    )

            }
    </div>
  )
}

export default Countries
