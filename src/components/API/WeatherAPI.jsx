import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherAPI.css";
import SearchForm from "./SearchForm";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const convertToDate = (milliSeconds) => {
  const date = new Date(milliSeconds);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}-${month}-${year}`;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("srinagar");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      console.log(API_KEY);
      try {
        // Calling weather API
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  const date = convertToDate(new Date().getTime());

  return (
    <div className="weather-app">
      <h1>Alluring Weather App</h1>

      {/* search form */}
      <SearchForm setCity={setCity} />

      {loading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p>Failed to fetch weather data.</p>
      ) : weatherData ? (
        <div className="weather-container">
          <h2> {weatherData.name}</h2>
          <div>
            <p>Current Temperature: {weatherData.main.temp}°C</p>
            <p>Feels Like: {weatherData.main.feels_like}°C</p>
            <p>Day: {weatherData.main.temp_max}°C</p>
            <p>Night: {weatherData.main.temp_min}°C</p>
            <p>Wind Speed: {weatherData.wind.speed}km/h</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
          <p>Date: {date}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
