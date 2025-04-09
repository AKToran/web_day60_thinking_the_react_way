import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries}) => {
  const [isVisited, setIsVisited] = useState(false);
  const handleVisited =() =>{
    !isVisited && handleVisitedCountries(country);
    setIsVisited(!isVisited);
  }

  return (
    //	<div className={isVisited?'country-visited country':'country'}>
    <div className={`country ${isVisited && 'country-visited'}`}>
      <h3>Name: {country.name.official} </h3>
      <img src={country.flags.png} alt=''></img>
      <p>Independent: {country.independent ? "True":"False"} </p>
      <p>Population: {country.population}</p>
      <button onClick={handleVisited}>{isVisited? "Visited":"Not Visited"}</button>
    </div>
  );
};

export default Country;