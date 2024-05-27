import React from "react";
import { ReactSkycon } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "SHOWERS_DAY",
    "shower-rain-night": "SHOWERS_NIGHT",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "THUNDER_SHOWERS_DAY",
    "thunderstorm-night": "THUNDER_SHOWERS_NIGHT",
    "snow-day": "SNOW",
    "snow-nigt": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
    "wind-day": "WIND",
    "wind-night": "WIND",
  };
  return (
    <div className="weatherIcon">
      <ReactSkycon
        icon={codeMapping[props.code]}
        size={150}
        color={"#383838"}
      />
    </div>
  );
}
