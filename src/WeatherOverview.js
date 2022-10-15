import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
    return (
    <div className="WeatherOverview">
        <div className="overview">
        <h1 className="text-capitalize">{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            </div>
        <div className="row">
          <div className="col-6">
              <img src={props.data.icon} alt="weather icon"/>
              <strong>{Math.round(props.data.temperature)}</strong>
              <small>°C</small>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
    </div>
    );
}