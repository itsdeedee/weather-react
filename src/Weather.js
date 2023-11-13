import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.description}.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form class="search-form" id="search-form">
          <div class="row">
            <div class="col-6">
              <input
                type="search"
                placeholder="City.."
                class="form-control"
                id="city-form-input"
              />
            </div>
            <div class="col-2">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-outline-info"
              />
            </div>
            <div class="col-3">
              <button
                type="button"
                class="btn btn-outline-info"
                id="currentButton"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <h1>Paris</h1>
        <div class="row" id="weather-attributes">
          <div class="col-6">
            <ul>
              <li>
                <span id="time">Thursday 18:38</span>,
                <span id="description">{weatherData.description}</span>
              </li>

              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
          <div class="col-6">
            <div class="d-flex weather-temperature">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="Clear"
                id="icon"
              />
              <div class="float-left">
                <strong id="temp">{weatherData.temperature}</strong>
                <span class="units">℃</span>
              </div>
            </div>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "bdc1aa3oa00cd461t2421e4af03336bc";
    let city = "Paris";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading . . . . .";
  }
}
