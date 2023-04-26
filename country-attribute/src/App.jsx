import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        // setCountries(response.data)
        console.log(response.data)
      })
      
      .catch(error => console.log({ error }));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>
          React Router{" "}
          <img
            src="https://avatars3.githubusercontent.com/u/60869810?v=4"
            alt="Umut Polat"
          />{" "}
          Umut Polat
        </h1>
        <Routes>
          <Route
            path="/"
            element={<CountryList countries={countries} setCountries={setCountries} />}
          />
          <Route
            path="/country/:code"
            element={<Country countries={countries} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function Country({ countries }) {
  const { code } = useParams();
  const country = countries.find((c) => c.cca3 === code);

  return (
    <div className="single">
      {/* <h1>{country?.name.common}</h1>
      <div className="explain">
        <img src={country.flags.svg} alt={country.name.common} />
        <div className="info">
          <p><b>Region:</b> {country.region}</p>
          <p><b>Capital:</b> {country.capital || "No Capital"}</p>
          <p><b>Population:</b> {parseInt(country.population) || "No Information"}</p>
          <p><b>Language:</b> {country.languages.spa ||country.languages.eng || "No Information"}</p>
          <p><a href={country.maps.openStreetMaps} target="_blank">Location</a></p>
          <Link to="/"><button className="button-92" role="button">Back</button></Link>
        </div>
      </div> */}
    </div>
  );
}

export default App;
