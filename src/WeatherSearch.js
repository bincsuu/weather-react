import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "fdd9ef011491bdd0ac653f81ffb9ed48";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    console.log(apiUrl);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
      <input type="search" placeholder="Enter a city" className="form-input" autoFocus="on" onChange={updateCity} />
      </div>
      <div className="col-3">
      <input type="submit" value="Search" className="form-button" />
      </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h1 className="city-display" >{weather.city}</h1>
                <div className="day-time" >
                  <FormattedDate date={weather.date} />
                  </div>
                  <div className="text-capitalize weather-description">{weather.description}</div>
          <div className="row">
          <div className="col-6 weather-display">
            <img src={weather.icon} alt={weather.description} className="icon-image"/><span className="temperature-display">{Math.round(weather.temperature)}<span className="unit">°C</span></span>
          </div>
            <div className="col-6 wind-humidity">
              <ul><li>Wind:  {weather.wind} m/s</li>
          <li>Humidity:  {weather.humidity} %</li></ul>
            </div>
          </div>
      </div>
    );
  } else {
    return form;
  }
}
