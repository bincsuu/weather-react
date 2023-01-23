import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";

export default function App() {
  return (
    <div className="Weather App">
      <div className="container">
      <h1>Weather App</h1>
      <WeatherSearch />
      </div>
    </div>
  );
}
