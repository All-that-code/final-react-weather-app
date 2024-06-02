import React from "react";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "/images/clear day.png",
    "clear-sky-night": "/images/clear night.png",
    "few-clouds-day": "/images/partially cloudy day.png",
    "few-clouds-night": "/images/partially cloudy night.png",
    "scattered-clouds-day": "/images/partially cloudy day.png",
    "scattered-clouds-night": "/images/partially cloudy night.png",
    "broken-clouds-day": "/images/very cloudy.png",
    "broken-clouds-night": "/images/very cloudy.png",
    "shower-rain-day": "/images/rain.png",
    "shower-rain-night": "/images/rain.png",
    "rain-day": "/images/rain.png",
    "rain-night": "/images/rain.png",
    "thunderstorm-day": "/images/thunder.png",
    "thunderstorm-night": "/images/thunder.png",
    "snow-day": "/images/snow.png",
    "snow-night": "/images/snow.png",
    "mist-day": "/images/fog.png",
    "mist-night": "/images/fog.png",
    "wind-day": "/images/mist.png",
    "wind-night": "/images/mist.png",
  };

  const imageSrc = codeMapping[props.code];

  // Check if imageSrc is undefined
  if (!imageSrc) {
    console.error(`No image found for code: ${props.code}`);
    return null; // or return a default image
  }

  return (
    <div className="weatherIcon">
      <img src={imageSrc} alt={props.code} width={props.width} />
    </div>
  );
}
