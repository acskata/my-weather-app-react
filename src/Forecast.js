import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
    let [completed, setCompleted] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function  handleResponse(response) {
        setForecastData(response.data.daily);
        setCompleted(true);
    }

    if (completed){
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col">
                        <h3>{forecastData[0].dt}</h3>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="weather icon"/>
                        <p>{forecastData[0].temp.max}°C</p>
                    </div>
                </div>
            </div>
            );
    } else {
        let apiKey = "ce144f0cf51fa43f03431f0488a36728";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
    
        return null;
    }
}