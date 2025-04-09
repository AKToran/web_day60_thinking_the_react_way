import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) =>{
    const newVisitedCountries = [...visitedCountries, country];
    //react compares the new array with the old one from reference and updates and re-renders
    setVisitedCountries(newVisitedCountries);
  }

  const countries = use(countriesPromise);
  return (
    <div>
      <h1>Traveling countries: {countries.length}</h1>
      <h2>Traveled so far: {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country 
          handleVisitedCountries = {handleVisitedCountries}
          key={country.cca3} 
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
