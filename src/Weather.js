import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Search for a city" className="form-control" autofocus="on"/>
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
              </div>
            </div>
          </form>
        <div className="overview">
          <h1 className="text-capitalize">{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date}/>
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
              <img src={weatherData.icon} alt="weather icon"/>
              <strong>{Math.round(weatherData.temperature)}</strong>
              <small>°C</small>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
      );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=d625d605caecd846d09dcbe7a0339339&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
  }