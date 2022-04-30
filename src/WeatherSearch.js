import React, { useState } from "react";
import axios from "axios";
import displayWeather from "./Weather.js";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.city);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
    displayWeather(city);
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
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
