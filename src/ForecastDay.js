import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}`;
  }

  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}`;
  }
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
        color={"#240046"}
        size="20"
      />
      <p>
        {minTemperature()} °F | {maxTemperature()} °F
      </p>
    </div>
  );
}
