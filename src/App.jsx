import "./App.css";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import ForecastCard from "./components/ForecastCard";

export default function App() {
  const [cityInput, setCityInput] = useState("");
  // Current
  const [weatherData, setWeatherData] = useState("");
  // Five Day
  const [dayOneWeather, setDayOneWeather] = useState("");
  const [dayOneDate, setDayOneDate] = useState("");
  const [dayOneDesc, setDayOneDesc] = useState("");

  const [dayTwoWeather, setDayTwoWeather] = useState("");
  const [dayTwoDate, setDayTwoDate] = useState("");
  const [dayTwoDesc, setDayTwoDesc] = useState("");

  const [dayThreeWeather, setDayThreeWeather] = useState("");
  const [dayThreeDate, setDayThreeDate] = useState("");
  const [dayThreeDesc, setDayThreeDesc] = useState("");

  const [dayFourWeather, setDayFourWeather] = useState("");
  const [dayFourDate, setDayFourDate] = useState("");
  const [dayFourDesc, setDayFourDesc] = useState("");

  const [dayFiveWeather, setDayFiveWeather] = useState("");
  const [dayFiveDate, setDayFiveDate] = useState("");
  const [dayFiveDesc, setDayFiveDesc] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  // Get Latitude and Longitude from City Input
  const geoCodeUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityInput +
    "&limit=5&appid=" +
    apiKey;

  const getGeoCode = async () => {
    const geoResponse = await axios.get(geoCodeUrl);

    // Get city Weather from Latitude and Longitude
    const weatherUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      geoResponse.data[0].lat +
      "&lon=" +
      geoResponse.data[0].lon +
      "&units=imperial&limit=5&appid=" +
      apiKey;

    const fiveDayUrl =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      geoResponse.data[0].lat +
      "&lon=" +
      geoResponse.data[0].lon +
      "&units=imperial&cnt=30&appid=" +
      apiKey;

    const getWeather = async () => {
      const response = await axios.get(weatherUrl);
      console.log("Response Data", response.data);
      setWeatherData(response.data);

      const forecastResponse = await axios.get(fiveDayUrl);
      console.log("Forecast Data", forecastResponse.data);

      setDayOneWeather(forecastResponse.data.list[0].main);
      setDayOneDate(dayjs(forecastResponse.data.list[0].dt_txt).format('dddd, MMM D'));
      setDayOneDesc(forecastResponse.data.list[0].weather[0].main)

      setDayTwoWeather(forecastResponse.data.list[6].main);
      setDayTwoDate(dayjs(forecastResponse.data.list[6].dt_txt).format('dddd, MMM D'));
      setDayTwoDesc(forecastResponse.data.list[6].weather[0].main)

      setDayThreeWeather(forecastResponse.data.list[14].main);
      setDayThreeDate(dayjs(forecastResponse.data.list[14].dt_txt).format('dddd, MMM D'));
      setDayThreeDesc(forecastResponse.data.list[14].weather[0].main)

      setDayFourWeather(forecastResponse.data.list[22].main);
      setDayFourDate(dayjs(forecastResponse.data.list[22].dt_txt).format('dddd, MMM D'));
      setDayFourDesc(forecastResponse.data.list[22].weather[0].main)

      setDayFiveWeather(forecastResponse.data.list[29].main);
      setDayFiveDate(dayjs(forecastResponse.data.list[29].dt_txt).format('dddd, MMM D'));
      setDayFiveDesc(forecastResponse.data.list[29].weather[0].main)

      console.log(dayTwoDate)

      setCityInput("");
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

      {weatherData && (
        <div>
          <ForecastCard
            dailyWeather={weatherData}

            dayOneWeather={dayOneWeather}
            dayOneDate={dayOneDate}
            dayOneDesc={dayOneDesc}

            dayTwoWeather={dayTwoWeather}
            dayTwoDate={dayTwoDate}
            dayTwoDesc={dayTwoDesc}

            dayThreeWeather={dayThreeWeather}
            dayThreeDate={dayThreeDate}
            dayThreeDesc={dayThreeDesc}

            dayFourWeather={dayFourWeather}
            dayFourDate={dayFourDate}
            dayFourDesc={dayFourDesc}

            dayFiveWeather={dayFiveWeather}
            dayFiveDate={dayFiveDate}
            dayFiveDesc={dayFiveDesc}
          />
        </div>
      )}
    </div>
  );
}