import React, {useState} from "react";
import "./Temperature.css";

export default function Temperature(props) {
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
      }

      function celsius(event) {
        event.preventDefault();
        setUnit("celsius");
      }

    const [unit, setUnit] = useState("celsius");
    if (unit === "celsius") {
    return (
    <div className="Temperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <small>°C |{" "}<a href="/" onClick={showFahrenheit}> °F</a></small>
    </div>  
    );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <div className="Temperature">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <small>
                    <a href="/" onClick={celsius}>°C</a>{" "}| °F</small>
            </div>  
        );
    }
}