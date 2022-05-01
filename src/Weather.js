import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  return (
    <div className="Weather">
      <WeatherInfo />
      <form>
        <input type="search" placeholder="Type a city..." className="search" />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}
