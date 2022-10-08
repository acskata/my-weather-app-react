import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [response, setResponse] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemp(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99b6d7e451166786e8df2d31f57d9b2a&units=metric`;
  axios.get(url).then(showTemp);

  function handleSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      setResponse(
        <div className="Summary">
          <div className="overview">
        <h1>{city}</h1>
        <ul>
          <li>Pending...</li>
          <li className="text-capitalize">{description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weatherTemp">
            <img
              src={icon} alt="weather icon"
            />
            <strong>{Math.round(temperature)}</strong>
            <small>
              °C
            </small>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {humidity}</li>
            <li>Wind: {wind}km/s</li>
          </ul>
        </div>
      </div>
        </div>
      );
    } else {
      alert("Type a city...");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSearch} className="mb-3">
      <div className="row">
          <div className="col-9">
        <input
          type="search"
          placeholder="Search for a city"
          className="form-control"
          onChange={updateCity}
        />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
      </form>
      <h2>{response}</h2>
    </div>
  );
}
