import React from "react";
import WeatherDate from "./WeatherDate";

export default function Weather2(props) {
  return (
    <div className="Weather2">
      <h1>{props.data.city}</h1>
      <div class="row" id="weather-attributes">
        <div class="col-6">
          <ul>
            <li>
              <WeatherDate date={props.data.time} />
            </li>

            <li>
              <span id="description">{props.data.description}</span>
            </li>

            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span>km/h
            </li>
          </ul>
        </div>
        <div class="col-6">
          <div class="d-flex weather-temperature">
            <img src={props.data.iconUrl} alt="Clear" id="icon" />
            <div class="float-left">
              <strong id="temp">{props.data.temperature}</strong>
              <span class="units">℃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
