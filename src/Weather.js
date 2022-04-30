import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherSearch from "./WeatherSearch";

export default function Weather(props) {
  const [ready, setReady] = useState({ ready: false });
  const [weatherData, setWeatherData] = useState({});
  function displayWeather(response) {
    setReady({
      ready: true,
    });
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <h1>{weatherData.city}</h1>
                  <h2>Currently {Math.round(weatherData.temperature)}°F</h2>
                  <div>
                    <FormattedDate date={weatherData.date} />
                  </div>
                  <p>
                    <ReactAnimatedWeather
                      icon={"CLEAR_DAY"}
                      color={"goldenrod"}
                      size={200}
                      animate={true}
                    />
                  </p>
                  <WeatherSearch />
                </div>
                <div className="col-2">
                  <ul>
                    <li className="weatherDetails">
                      Humidity: {weatherData.humidity}%
                    </li>
                    <li className="weatherDetails">
                      Wind Speed: {Math.round(weatherData.wind)}mph
                    </li>
                  </ul>
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
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let city = "Madrid";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading...";
  }
}
