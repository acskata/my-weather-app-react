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

    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return (
        <div className="ForecastDay">
            <h3>{formatDays()}</h3>
            <img src={iconUrl} alt="weather icon"/>
            <p>{maxTemperature()}</p>
        </div>
    );
}