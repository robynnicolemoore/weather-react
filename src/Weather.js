import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let defaultCity = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            className="search"
            onChange={cityChange}
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
}
