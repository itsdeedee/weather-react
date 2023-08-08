import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            <div class="weather-forecast">Mon</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
              alt="clear"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">12°</span>
              <span class="weather-forecast-temperature-min"> 3° </span>
            </div>
          </div>
          <div class="col-2">
            <div class="weather-forecast">Tue</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
              alt="clear"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">12°</span>
              <span class="weather-forecast-temperature-min"> 3° </span>
            </div>
          </div>
          <div class="col-2">
            <div class="weather-forecast">Wed</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
              alt="clear"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">12°</span>
              <span class="weather-forecast-temperature-min"> 3° </span>
            </div>
          </div>
          <div class="col-2">
            <div class="weather-forecast">Thur</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
              alt="clear"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">12°</span>
              <span class="weather-forecast-temperature-min"> 3° </span>
            </div>
          </div>
          <div class="col-2">
            <div class="weather-forecast">Fri</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="clear"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">12°</span>
              <span class="weather-forecast-temperature-min"> 3° </span>
            </div>
          </div>
          <div class="col-2">
            <div class="weather-forecast">Sat</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt="clear"
              width="42"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">12°</span>
              <span class="weather-forecast-temperature-min"> 3° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
