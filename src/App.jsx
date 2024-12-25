import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import React from "react";


function App() {
  const [weather, setweather] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const getweather = async() =>{
    try{
      setLoading(true)
    const res = await axios({
      method: 'GET',
      url:'https://api.weatherstack.com/current?access_key=3684814caa60236771c3e4788d9e1cde',
      params: {
        query: search,
      }
      
    }) 
    console.log(res);
    setweather(res.data);
    setLoading(false);
    }catch(err) {
      console.log(err)
      setLoading(false);
    }
  }


  

  return (
    <div className='wrapper'>
<div class="input__container">
  <div class="shadow__input"></div>
  <button class="input__button__shadow" onClick={getweather}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
      <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
    </svg>
  </button>
  <input type="text" name="text" class="input__search" placeholder="What do you want to search?" onChange={(e) => setSearch(e.target.value)}/>
</div>
     <div class="card">
      
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>
  {loading ? 

<div class="loader">
  <span class="loader-text">loading</span>
    <span class="load"></span>
</div> : <div class="card-header">
    <span>{weather ? weather.location.name : 'Enter Location above'}</span>
    <span>{weather ? weather.location.localtime: 'Time From Given Location'} </span>
  </div>
}
  

  <span class="temp">{weather ? weather.current.temperature: '0'}°</span>

  <div class="temp-scale">
    <span>Celcius</span>
  </div>
</div>
    </div>
  )
}

export default App
