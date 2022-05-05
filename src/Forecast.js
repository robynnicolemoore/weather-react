import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

function handleResponse(response) {
  console.log(response.data);
}

export default function Forecast(props) {
  const apiKey = "512fdc436870661a029a84285db6b3f9";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <h4>Monday</h4>
      <ReactAnimatedWeather icon={"CLEAR_DAY"} color={"goldenrod"} size={20} />
      <p>65°F | 80°F</p>
      <h4>Tuesday</h4>
      <ReactAnimatedWeather icon={"CLEAR_DAY"} color={"goldenrod"} size={20} />
      <p>65°F | 80°F</p>
      <h4>Wednesday</h4>
      <ReactAnimatedWeather icon={"CLEAR_DAY"} color={"goldenrod"} size={20} />
      <p>65°F | 80°F</p>
      <h4>Thursday</h4>
      <ReactAnimatedWeather icon={"CLEAR_DAY"} color={"goldenrod"} size={20} />
      <p>65°F | 80°F</p>
    </div>
  );
}
