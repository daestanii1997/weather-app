import "./App.css";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import search from "../public/search.png";
import ForecastCard from "./components/ForecastCard";

export default function App() {
  const [cityInput, setCityInput] = useState("");
  // Current
  const [weatherData, setWeatherData] = useState("");
  // Five Day
  const [dayOneWeather, setDayOneWeather] = useState("");
  const [dayOneDate, setDayOneDate] = useState("");
  const [dayOneDesc, setDayOneDesc] = useState("");
  const [dayOneIcon, setDayOneIcon] = useState("");

  const [dayTwoWeather, setDayTwoWeather] = useState("");
  const [dayTwoDate, setDayTwoDate] = useState("");
  const [dayTwoDesc, setDayTwoDesc] = useState("");
  const [dayTwoIcon, setDayTwoIcon] = useState("");

  const [dayThreeWeather, setDayThreeWeather] = useState("");
  const [dayThreeDate, setDayThreeDate] = useState("");
  const [dayThreeDesc, setDayThreeDesc] = useState("");
  const [dayThreeIcon, setDayThreeIcon] = useState("");

  const [dayFourWeather, setDayFourWeather] = useState("");
  const [dayFourDate, setDayFourDate] = useState("");
  const [dayFourDesc, setDayFourDesc] = useState("");
  const [dayFourIcon, setDayFourIcon] = useState("");

  const [dayFiveWeather, setDayFiveWeather] = useState("");
  const [dayFiveDate, setDayFiveDate] = useState("");
  const [dayFiveDesc, setDayFiveDesc] = useState("");
  const [dayFiveIcon, setDayFiveIcon] = useState("");

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
      "&units=imperial&cnt=35&appid=" +
      apiKey;

    const getWeather = async () => {
      const response = await axios.get(weatherUrl);
      console.log("Response Data", response.data);
      setWeatherData(response.data);

      const forecastResponse = await axios.get(fiveDayUrl);
      console.log("Forecast Data", forecastResponse.data);

      setDayOneWeather(forecastResponse.data.list[0].main);
      setDayOneDate(
        dayjs(forecastResponse.data.list[0].dt_txt).format("dddd, MMM D")
      );
      setDayOneDesc(forecastResponse.data.list[0].weather[0].main);
      setDayOneIcon(forecastResponse.data.list[0].weather[0].icon);

      setDayTwoWeather(forecastResponse.data.list[8].main);
      setDayTwoDate(
        dayjs(forecastResponse.data.list[8].dt_txt).format("dddd, MMM D")
      );
      setDayTwoDesc(forecastResponse.data.list[8].weather[0].main);
      setDayTwoIcon(forecastResponse.data.list[8].weather[0].icon);

      setDayThreeWeather(forecastResponse.data.list[16].main);
      setDayThreeDate(
        dayjs(forecastResponse.data.list[16].dt_txt).format("dddd, MMM D")
      );
      setDayThreeDesc(forecastResponse.data.list[16].weather[0].main);
      setDayThreeIcon(forecastResponse.data.list[16].weather[0].icon);

      setDayFourWeather(forecastResponse.data.list[24].main);
      setDayFourDate(
        dayjs(forecastResponse.data.list[24].dt_txt).format("dddd, MMM D")
      );
      setDayFourDesc(forecastResponse.data.list[24].weather[0].main);
      setDayFourIcon(forecastResponse.data.list[24].weather[0].icon);

      setDayFiveWeather(forecastResponse.data.list[32].main);
      setDayFiveDate(
        dayjs(forecastResponse.data.list[32].dt_txt).format("dddd, MMM D")
      );
      setDayFiveDesc(forecastResponse.data.list[32].weather[0].main);
      setDayFiveIcon(forecastResponse.data.list[32].weather[0].icon);

      setCityInput("");
    };

    getWeather();
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <input
          className="bg-white rounded-md p-1 text-black"
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Your City"
        />
        <button
          className="rounded-lg p-1 ml-1 w-10"
          type="submit"
          onClick={getGeoCode}
        >
          <img className="rounded-md bg-transparent hover:shadow-lg" src={search} />
        </button>
      </div>

      {weatherData && (
        <div>
          <ForecastCard
            dailyWeather={weatherData}
            dayOneWeather={dayOneWeather}
            dayOneDate={dayOneDate}
            dayOneDesc={dayOneDesc}
            dayOneIcon={dayOneIcon}
            dayTwoWeather={dayTwoWeather}
            dayTwoDate={dayTwoDate}
            dayTwoDesc={dayTwoDesc}
            dayTwoIcon={dayTwoIcon}
            dayThreeWeather={dayThreeWeather}
            dayThreeDate={dayThreeDate}
            dayThreeDesc={dayThreeDesc}
            dayThreeIcon={dayThreeIcon}
            dayFourWeather={dayFourWeather}
            dayFourDate={dayFourDate}
            dayFourDesc={dayFourDesc}
            dayFourIcon={dayFourIcon}
            dayFiveWeather={dayFiveWeather}
            dayFiveDate={dayFiveDate}
            dayFiveDesc={dayFiveDesc}
            dayFiveIcon={dayFiveIcon}
          />
        </div>
      )}
    </div>
  );
}
