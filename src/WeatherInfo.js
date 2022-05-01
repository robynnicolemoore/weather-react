import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function WeatherInfo() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
      <div className="Container">
        <div className="row">
          <div className="col">
            <h1>{weatherData.city}</h1>
            <h2>Currently {weatherData.temperature}°F</h2>
            <p>Date</p>
            <div>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={100}
              />
            </div>
            <h3 className="text-capitalize">{weatherData.description}</h3>
          </div>
          <div className="col">
            <ul>
              <li className="weatherDetails">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="weatherDetails">
                Wind Speed: {weatherData.wind}mph
              </li>
            </ul>
          </div>
          <div className="col">
            <span className="forecast">
              <h4>Monday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={20}
              />
              <p>65°F | 80°F</p>
              <h4>Tuesday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={20}
              />
              <p>65°F | 80°F</p>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let defaultCity = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
