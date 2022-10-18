import React, { useState } from "react";
import axios from "axios";
import WeatherOverview from "./WeatherOverview";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name
    });
  }

  function search() {
    const apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateLocation(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
          <form onSubmit={handleSearch} className="mb-3">
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Search for a city" className="form-control form-control-sm" autoFocus="on" onChange={updateLocation}/>
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary btn-sm w-100"/>
              </div>
            </div>
          </form>
            <WeatherOverview data={weatherData}/>
            <Forecast coordinates={weatherData.coordinates} />
      </div>
      );
  } else {
    search();
    return "Loading...";
    }
  }