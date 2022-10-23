import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [completed, setCompleted] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setCompleted(false);
      }, [props.coordinates]);

    function  handleResponse(response) {
        setForecastData(response.data.daily);
        setCompleted(true);
    }

    if (completed){
        return (
            <div className="Forecast">
                <div className="row gx-2">
                    <div className="col">
                        <ForecastDay data={forecastData[1]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecastData[2]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecastData[3]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecastData[4]} />
                    </div>
                    <div className="col">
                        <ForecastDay data={forecastData[5]} />
                    </div>
                </div>
            </div>
            );
    } else {
        let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
    
        return null;
    }
}