import React from "react";
import Form from "./Form.js";
import City from "./City";
import Time from "./Time";
import Description from "./Description";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <City />
        <div class="row" id="weather-attributes">
          <div class="col-6">
            <ul>
              <li>
                <Time />
                <Description />
              </li>
              <Humidity />
              <Wind />
            </ul>
          </div>
          <div class="col-6">
            <div class="d-flex weather-temperature">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt="Clear"
                id="icon"
              />
              <Temperature />
            </div>
          </div>
        </div>
        <Forecast />
      </div>
      <div className="link">
        <p>
          <Link to="https://github.com/itsdeedee/weather-react">
            Open-source code
          </Link>{" "}
          by Divine Joseph
        </p>
      </div>
    </div>
  );
}

export default App;
