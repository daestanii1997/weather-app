import PropTypes from "prop-types";

export default function ForecastCard(props) {
  const {
    dailyWeather,

    dayOneWeather,
    dayOneDate,
    dayOneDesc,

    dayTwoWeather,
    dayTwoDate,
    dayTwoDesc,

    dayThreeWeather,
    dayThreeDate,
    dayThreeDesc,
    
    dayFourWeather,
    dayFourDate,
    dayFourDesc,
    
    dayFiveWeather,
    dayFiveDate,
    dayFiveDesc,
} = props;

  const weatherIcon = "https://openweathermap.org/img/wn/" + dailyWeather.weather[0].icon + "@2x.png"

  return (
    <div>
      <section>
        <h2>{dailyWeather.name}</h2>
        <p>{dailyWeather.weather[0].main}</p>
        <img src={weatherIcon}/>
        <p>{dailyWeather.main.temp}° F</p>
        <p>Feels Like: {dailyWeather.main.feels_like}° F</p>
        <p>Min: {dailyWeather.main.temp_min}° F</p>
        <p>Max: {dailyWeather.main.temp_max}° F</p>
        <p>Humidity: {dailyWeather.main.humidity}%</p>
      </section>

      <section>
        <h2>Five Day Forecast</h2>
        <div>
          <h4>{dayOneDate}</h4>
          <p>{dayOneDesc}</p>
          <p>{dayOneWeather.temp}° F</p>
          <p>Humidity: {dayOneWeather.humidity}%</p>
        </div>
        <div>
          <h4>{dayTwoDate}</h4>
          <p>{dayTwoDesc}</p>
          <p>{dayTwoWeather.temp}° F</p>
          <p>Humidity: {dayTwoWeather.humidity}%</p>
        </div>
        <div>
          <h4>{dayThreeDate}</h4>
          <p>{dayThreeDesc}</p>
          <p>{dayThreeWeather.temp}° F</p>
          <p>Humidity: {dayThreeWeather.humidity}%</p>
        </div>
        <div>
          <h4>{dayFourDate}</h4>
          <p>{dayFourDesc}</p>
          <p>{dayFourWeather.temp}° F</p>
          <p>Humidity: {dayFourWeather.humidity}%</p>
        </div>
        <div>
          <h4>{dayFiveDate}</h4>
          <p>{dayFiveDesc}</p>
          <p>{dayFiveWeather.temp}° F</p>
          <p>Humidity: {dayFiveWeather.humidity}%</p>
        </div>
      </section>
    </div>
  );
}

ForecastCard.propTypes = {
  dailyWeather: PropTypes.object,

  dayOneWeather: PropTypes.any,
  dayOneDate: PropTypes.string,
  dayOneDesc: PropTypes.string,

  dayTwoWeather: PropTypes.any,
  dayTwoDate: PropTypes.string,
  dayTwoDesc: PropTypes.string,

  dayThreeWeather: PropTypes.any,
  dayThreeDate: PropTypes.string,
  dayThreeDesc: PropTypes.string,

  dayFourWeather: PropTypes.any,
  dayFourDate: PropTypes.string,
  dayFourDesc: PropTypes.string,

  dayFiveWeather: PropTypes.any,
  dayFiveDate: PropTypes.string,
  dayFiveDesc: PropTypes.string,
};
