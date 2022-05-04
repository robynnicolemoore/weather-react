import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecasst() {
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
