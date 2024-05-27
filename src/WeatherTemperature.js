import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="temperature-container">
          <div className="temperature">{Math.round(props.celsius)}</div>
          <div className="units">
            <strong>°C </strong> |
            <strong>
              {" "}
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>
            </strong>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="temperature-container">
          <div className="temperature">{Math.round(fahrenheit())}</div>
          <div className="units">
            <strong>
              <a href="/" onClick={showCelsius}>
                °C{" "}
              </a>
            </strong>{" "}
            |<strong> °F</strong>
          </div>
        </div>
      </div>
    );
  }
}
