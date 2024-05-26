import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>New York</h1>
          <ul>
            <li>Wednesday, 07:00</li>
            <li>Mostly cloudy</li>
          </ul>
          <div className="temperature-container">
            <div className="temperature">15</div>
            <div className="units">
              <strong>°C </strong> |<strong> °F</strong>
            </div>
          </div>
        </div>
        <div className="col-5 icon-block">
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
            width="200px"
          />
          <ul className="weather-data">
            <li>Precipitation: 0%</li>
            <li>Humidity: 0%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
