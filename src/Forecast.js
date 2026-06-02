import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    setLoaded(false);
    setError(null);
    const apiKey = "c13ec1823489873786dad083e25adf72";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/4.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function handleError() {
    setError("Forecast unavailable.");
    setLoaded(true);
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            {forecast.map(function (dailyForecast, index) {
              if (index >= 0 && index < 4) {
                return (
                  <div className="col" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
