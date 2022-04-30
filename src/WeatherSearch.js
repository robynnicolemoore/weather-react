import React, { useState } from "react";
import axios from "axios";
import displayWeather from "./Weather";

export default function WeatherSearch(event) {
  const [defaultCity, setDefaultCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }
  function changeCity(event) {
    setDefaultCity(event.target.value);
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city..."
          className="search"
          onChange={changeCity}
        />
        <input
          type="submit"
          value="Search"
          className="searchButton"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
