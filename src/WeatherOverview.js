import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
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
        <div className="row gx-2">
          <div className="col-2">
            <img className="overviewIcon" src={props.data.icon} alt="weather icon" width="72px"/></div>
            <div className="col-4">
            <Temperature celsius={props.data.temperature}/></div>
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