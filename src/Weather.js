import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    let city = "Madrid";
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="col-4">
            <WeatherInfo data={weatherData} />
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a city..."
                className="search"
                onChange={cityChange}
              />
              <input type="submit" value="Search" className="searchButton" />
            </form>
          </div>
          <div className="col-6">
            <div className="forecast">
              <h4>Monday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={30}
                animate={true}
              />
              <p> 65°F | 82°F</p>
              <br />
              <h4>Tuesday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={30}
                animate={true}
              />
              <p> 65°F | 82°F</p>
              <br />
              <h4>Wednesday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={30}
                animate={true}
              />
              <p> 65°F | 82°F</p>
              <br />
              <h4>Thursday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={30}
                animate={true}
              />
              <p> 65°F | 82°F</p>
              <br />
              <h4>Friday</h4>
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"goldenrod"}
                size={30}
                animate={true}
              />
              <p> 65°F | 82°F</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
