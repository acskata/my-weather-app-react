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
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
                <div className="float-left">
                    <img src={props.data.icon} alt="weather icon"/>
                 </div>
                 <div className="floatleft">
                    <Temperature celsius={props.data.temperature}/>
                </div>
            </div>
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