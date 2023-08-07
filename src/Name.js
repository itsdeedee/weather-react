import React from "react";
import axios from "axios";

export default function Name(props) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=5aac6d0188c6f17d6d2bbe6591b6fef0&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    return alert(`its is ${temperature}`);
  }
}
