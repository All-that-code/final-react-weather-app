import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather({ defaultCity, setAppBackground }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  useEffect(() => {
    search();
  }, []);

  function handleResponse(response) {
    const weatherData = {
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      condition: response.data.condition.description.toLowerCase(),
      icon: response.data.condition.icon,
    };

    setWeatherData(weatherData);

    // Set background image based on weather icon
    const weatherIcon = weatherData.icon;
    let bgImage = "";

    if (
      weatherIcon === "clear-sky-day" ||
      weatherIcon === "few-clouds-day" ||
      weatherIcon === "scattered-clouds-day"
    ) {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_03.png";
    } else if (
      weatherIcon === "clear-sky-night" ||
      weatherIcon === "few-clouds-night" ||
      weatherIcon === "scattered-clouds-night"
    ) {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_09.png";
    } else if (
      weatherIcon === "shower-rain-day" ||
      weatherIcon === "shower-rain-night" ||
      weatherIcon === "rain-day" ||
      weatherIcon === "rain-night"
    ) {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_05.png";
    } else if (
      weatherIcon === "broken-clouds-day" ||
      weatherIcon === "broken-clouds-night"
    ) {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_10.png";
    } else if (
      weatherIcon === "thunderstorm-day" ||
      weatherIcon === "thunderstorm-night"
    ) {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_04.png";
    } else if (
      weatherIcon === "snow-day" ||
      weatherIcon === "snow-night" ||
      weatherIcon === "mist-day" ||
      weatherIcon === "mist-night" ||
      weatherIcon === "wind-day" ||
      weatherIcon === "wind-night"
    ) {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_19.png";
    } else {
      bgImage = "/images/Kuro_Chroma_Grainy_Gradients_Abstract_Shapes_07.png";
    }

    setAppBackground(bgImage);
  }

  function search() {
    const apiKey = "8o03bb70ba39844fdc4a5a5t25cc70b6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="formControl"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="SEARCH" className="searchBtn" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
