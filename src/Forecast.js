import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <h4>{forecast[1].dt}</h4>
        <ReactAnimatedWeather
          icon={"CLEAR_DAY"}
          color={"goldenrod"}
          size={20}
        />
        <p>
          {Math.round(forecast[1].temp.min)}°F |{" "}
          {Math.round(forecast[1].temp.max)}°F
        </p>
        <h4>{forecast[2].dt}</h4>
        <ReactAnimatedWeather
          icon={"CLEAR_DAY"}
          color={"goldenrod"}
          size={20}
        />
        <p>
          {Math.round(forecast[2].temp.min)}°F |{" "}
          {Math.round(forecast[2].temp.max)}°F
        </p>
        <h4>{forecast[3].dt}</h4>
        <ReactAnimatedWeather
          icon={"CLEAR_DAY"}
          color={"goldenrod"}
          size={20}
        />
        <p>
          {Math.round(forecast[3].temp.min)}°F |{" "}
          {Math.round(forecast[3].temp.max)}°F
        </p>
        <h4>{forecast[4].dt}</h4>
        <ReactAnimatedWeather
          icon={"CLEAR_DAY"}
          color={"goldenrod"}
          size={20}
        />
        <p>
          {Math.round(forecast[4].temp.min)}°F |{" "}
          {Math.round(forecast[4].temp.max)}°F
        </p>
      </div>
    );
  } else {
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
}
