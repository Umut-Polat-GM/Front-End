import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const CountryList = ({countries, setCountries}) => {

  return (
    <div>
      {countries.map((country, i) => {
        return (
          <div key={i} className="country">
            <Link className='link' to={`/country/${country.cca3}`}><h3>{country.name.common}</h3></Link>
          </div>
        );
      })}
    </div>
  )
}

export default CountryList
