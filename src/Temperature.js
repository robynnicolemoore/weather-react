import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {}

  if (unit === "fahrenheit") {
    return (
      <h2>
        {props.temperature} <a href="">°F </a>|{" "}
        <a href="" onClick={convertToCelsius}>
          °C
        </a>
      </h2>
    );
  } else {
    return <div>C for celsius</div>;
  }
}
