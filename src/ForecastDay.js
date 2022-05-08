import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div>
      <h4>{day()}</h4>
      <WeatherIcon
        code={props.data.weather[0].icon}
        className="forecastIcon"
        aspect-ratio={200}
      />
      <p>
        {Math.round(props.data.temp.min)}°F | {Math.round(props.data.temp.max)}
        °F
      </p>
    </div>
  );
}
