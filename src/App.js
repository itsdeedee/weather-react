import React from "react";
import Weather from "./Weather.js";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
