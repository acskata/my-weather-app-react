import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
    return (
    <div className="Temperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <small>°C</small>
    </div>  
    );
}