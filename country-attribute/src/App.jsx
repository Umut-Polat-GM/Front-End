import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data))
      .catch(error => console.log({error}))
  }, []);
 console.log(countries)
  return (
    <div>
      {countries?.map((country, index) => {
        return (
          <div key={index}>
              <h2>{country.name.common}</h2>
              <h4>{country.capital}</h4>
              <p>
                <img src={country.flags.png} alt={country.flags.alt}/>
              </p>
          </div>
        )
      })}
    </div>
  )
}

export default App
