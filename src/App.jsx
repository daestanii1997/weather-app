import ForecastCard from "./components/ForecastCard";
import "./App.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [cityInput, setCityInput] = useState('');
  const [tempData, setTempData] = useState('')

  const apiKey = import.meta.env.VITE_API_KEY;

  const geoCodeUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityInput +
    "&limit=5&appid=" +
    apiKey;

  // Get Latitude and Longitude from City Input
  const getGeoCode = async () => {
    const response = await axios.get(geoCodeUrl);

    const weatherUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      response.data[0].lat +
      "&lon=" +
      response.data[0].lon +
      "&units=imperial&limit=5&appid=" +
      apiKey;

    // Get city Weather from Latitude and Longitude
    const getWeather = async () => {
      const response = await axios.get(weatherUrl);
      console.log(response.data);
      setTempData(response.data.main.temp)
      setCityInput('')
    };

    getWeather();
  };

  return (
    <div>
      <input
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Your City"
      />
      <button type="submit" onClick={getGeoCode}>
        Search
      </button>

      {tempData ? 
      <ForecastCard /> :
      <p>Search your city!</p>}

    </div>
  );
}
