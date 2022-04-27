import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h1>Madrid</h1>
                <h2>Currently 65°F</h2>
                <p>Last updated: time</p>
                <p>
                  <ReactAnimatedWeather
                    icon={"CLEAR_DAY"}
                    color={"goldenrod"}
                    size={200}
                    animate={true}
                  />
                </p>
                <form>
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="search"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="searchButton"
                  />
                </form>
              </div>
              <div className="col-2">
                <ul>
                  <li className="weatherDetails">Humidity: 0% </li>
                  <li className="weatherDetails">Wind Speed: 0mph</li>
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
        <p>
          {" "}
          <a
            href="https://github.com/robynnicolemoore/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Robyn Moore{" "}
        </p>
      </div>
    </div>
  );
}
