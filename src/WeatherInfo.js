import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <Temperature fahrenheit={props.data.temperature} />
          <FormattedDate date={props.data.date} />
          <div>
            <WeatherIcon code={props.data.icon} />
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
            <Forecast coordinates={props.data.coordinates} />
          </span>
        </div>
      </div>
    </div>
  );
}
