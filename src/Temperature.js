import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="Temperature">
        <h2>
          {Math.round(props.fahrenheit)} °F |{" "}
          <a href="" onClick={convertToCelsius}>
            °C
          </a>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <h2>
          {Math.round((props.fahrenheit - 32) * (5 / 9))}{" "}
          <a href="" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </h2>
      </div>
    );
  }
}
