import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
      <WeatherSearch />
      </div>
      <div className="footer">
        This project was coded by Bianca Sero and is open-sourced on <a href="https://github.com/bincsuu/weather-react" rel="noreferrer" target="_blank">GitHub</a> and hosted on <a href="https://app.netlify.com/teams/bincsuu/overview?_ga=2.148641847.1237730209.1658772995-980879625.1658772995" rel="noreferrer" target="_blank"> Netlify.</a>
      </div>
    </div>
  );
}
