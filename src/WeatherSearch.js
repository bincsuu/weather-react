import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      date: "Monday 07:00",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
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
      <input type="search" placeholder="Enter a city" className="form-input" autpFocus ="on" onChange={updateCity} />
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
        <h1>City</h1>
          <div className="row">
            <div className="col-6">
              <ul><li>{weather.date}</li>
          <li className="text-capitalize">{weather.description}</li>
          <li>
            <img src={weather.icon} />{Math.round(weather.temperature)}°C
          </li></ul>
            </div>
            <div className="col-6">
              <ul><li>Wind: {weather.wind}m/s</li>
          <li>Humidity: {weather.humidity}%</li></ul>
            </div>
          </div>
      </div>
    );
  } else {
    return form;
  }
}
