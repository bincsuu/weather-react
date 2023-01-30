import React from "react";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature() {
            let temperature = Math.round(props.data.temp.min);
            return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    return (
        <div>
        <div className="forecast-day">{day()}</div>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
    <div className="forecast-temperatures">
        <span className="forecast-max">{maxTemperature()}</span>
        <span className="forecast-min">{minTemperature()}</span>
    </div>
    </div>
    ); 
}