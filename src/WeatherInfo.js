import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <h1>{props.data.name}</h1>
          <h2>Currently {props.data.temperature}°F</h2>
          <FormattedDate date={props.data.date} />
          <div>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"goldenrod"}
              size={100}
            />
          </div>
          <h3 className="text-capitalize">{props.data.description}</h3>
        </div>
        <div className="col">
          <ul>
            <li className="weatherDetails">Humidity: {props.data.humidity}%</li>
            <li className="weatherDetails">Wind Speed: {props.data.wind}mph</li>
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
}
