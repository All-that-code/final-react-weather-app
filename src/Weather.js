import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      condition: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="formControl"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="SEARCH" className="searchBtn" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-7">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.condition}</li>
            </ul>
            <div className="temperature-container">
              <div className="temperature">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="units">
                <strong>°C </strong> |<strong> °F</strong>
              </div>
            </div>
          </div>
          <div className="col-5 icon-block">
            <img
              className="icon"
              src={weatherData.icon}
              alt="partly cloudy"
              width="200px"
            />
            <ul className="weather-data">
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    const apiKey = "8o03bb70ba39844fdc4a5a5t25cc70b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
