import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function Url() {
    let iconUrlDaily = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`;
    return `${iconUrlDaily}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img src={Url()} alt="Clear" id="icon" style={{ width: 42 }} />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
