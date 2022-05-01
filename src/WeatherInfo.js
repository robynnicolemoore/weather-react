import React from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="Container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h1>{props.data.city}</h1>
                <h2>
                  Currently {Math.round(props.data.temperature)}
                  °F
                </h2>
                <div>
                  <FormattedDate date={props.data.date} />
                </div>
                <p>
                  <ReactAnimatedWeather
                    icon={"CLEAR_DAY"}
                    color={"goldenrod"}
                    size={200}
                    animate={true}
                  />
                </p>
              </div>
              <div className="col-2">
                <ul>
                  <li className="weatherDetails">
                    Humidity: {props.data.humidity}%
                  </li>
                  <li className="weatherDetails">
                    Wind Speed: {Math.round(props.data.wind)}mph
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
