import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";
import Weather2 from "./Weather2";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [weatherTime, setWeatherTime] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });
  }
  function handleTime(response) {
    console.log(response.data);
    setWeatherTime({ date: new Date(response.data.dt * 1000) });
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
        <Weather2 data={weatherData} time={weatherTime} />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "bdc1aa3oa00cd461t2421e4af03336bc";
    let city = "Paris";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    const ApiKey = "46bcf398c3089fd0db0296fd3c3fb1f6";
    let City = "Paris";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}`;
    axios.get(ApiUrl).then(handleTime);

    return "Loading . . . . .";
  }
}
