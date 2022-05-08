import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

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
        color={"#240046"}
        size={20}
        animated={true}
      />
      <p>
        {Math.round(props.data.temp.min)}°F | {Math.round(props.data.temp.max)}
        °F
      </p>
    </div>
  );
}
