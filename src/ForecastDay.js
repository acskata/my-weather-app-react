import React from "react";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°C`;
    }

    function formatDays() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ];
      
        return days[day];
    }

    return (
        <div className="ForecastDay">
            <h3>{formatDays()}</h3>
            <img src="https://ssl.gstatic.com/onebox/weather/48/rain.png" alt="weather icon"/>
            <p>{maxTemperature()}</p>
        </div>
    );
}