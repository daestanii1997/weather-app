import PropTypes from "prop-types";

export default function ForecastCard(props) {
  const {
    dailyWeather,

    dayOneWeather,
    dayOneDate,
    dayOneDesc,
    dayOneIcon,

    dayTwoWeather,
    dayTwoDate,
    dayTwoDesc,
    dayTwoIcon,

    dayThreeWeather,
    dayThreeDate,
    dayThreeDesc,
    dayThreeIcon,

    dayFourWeather,
    dayFourDate,
    dayFourDesc,
    dayFourIcon,

    dayFiveWeather,
    dayFiveDate,
    dayFiveDesc,
    dayFiveIcon,
  } = props;

  const dailyWeatherIcon =
    "https://openweathermap.org/img/wn/" +
    dailyWeather.weather[0].icon +
    "@2x.png";
  const dayOneIconUrl =
    "https://openweathermap.org/img/wn/" + dayOneIcon + "@2x.png";
  const dayTwoIconUrl =
    "https://openweathermap.org/img/wn/" + dayTwoIcon + "@2x.png";
  const dayThreeIconUrl =
    "https://openweathermap.org/img/wn/" + dayThreeIcon + "@2x.png";
  const dayFourIconUrl =
    "https://openweathermap.org/img/wn/" + dayFourIcon + "@2x.png";
  const dayFiveIconUrl =
    "https://openweathermap.org/img/wn/" + dayFiveIcon + "@2x.png";

  return (
    <div className="leading-relaxed">
      <section className="m-3 text-md py-3 border-y border-[#8798d7]">
        <h2 className="text-3xl mb-3">{dailyWeather.name}</h2>
        <p className="text-xl">{dailyWeather.weather[0].main}</p>
        <div className="flex justify-center items-center">
          <img className="w-20" src={dailyWeatherIcon} />
        </div>
        <p className="text-xl">{dailyWeather.main.temp}° F</p>
        <p>
          <strong>Feels Like:</strong> {dailyWeather.main.feels_like}° F
        </p>
        <p>
          <strong>Min:</strong> {dailyWeather.main.temp_min}° F
        </p>
        <p>
          <strong>Max:</strong> {dailyWeather.main.temp_max}° F
        </p>
        <p>
          <strong>Humidity:</strong> {dailyWeather.main.humidity}%
        </p>
      </section>

      <h2 className="text-2xl mb-3">Five Day Forecast</h2>
      <section className="flex flex-row justify-center items-center md:gap-5 sm:gap-2 text-sm">
        <div>
          <h4 className="md:text-lg sm:text-md">{dayOneDate}</h4>
          <p>{dayOneDesc}</p>
          <div className="flex justify-center items-center">
            <img className="w-16" src={dayOneIconUrl} />
          </div>
          <p>{dayOneWeather.temp}° F</p>
          <p>
            <strong>Min:</strong> {dayOneWeather.temp_min}° F
          </p>
          <p>
            <strong>Max:</strong> {dayOneWeather.temp_max}° F
          </p>
          <p>
            <strong>Humidity:</strong> {dayOneWeather.humidity}%
          </p>
        </div>
        <div>
          <h4 className="md:text-lg sm:text-md">{dayTwoDate}</h4>
          <p>{dayTwoDesc}</p>
          <div className="flex justify-center items-center">
            <img className="w-16" src={dayTwoIconUrl} />
          </div>
          <p>{dayTwoWeather.temp}° F</p>
          <p>
            <strong>Min:</strong> {dayTwoWeather.temp_min}° F
          </p>
          <p>
            <strong>Max:</strong> {dayTwoWeather.temp_max}° F
          </p>
          <p>
            <strong>Humidity:</strong> {dayTwoWeather.humidity}%
          </p>
        </div>
        <div>
          <h4 className="md:text-lg sm:text-md">{dayThreeDate}</h4>
          <p>{dayThreeDesc}</p>
          <div className="flex justify-center items-center">
            <img className="w-16" src={dayThreeIconUrl} />
          </div>
          <p>{dayThreeWeather.temp}° F</p>
          <p>
            <strong>Min:</strong> {dayThreeWeather.temp_min}° F
          </p>
          <p>
            <strong>Max:</strong> {dayThreeWeather.temp_max}° F
          </p>
          <p>
            <strong>Humidity:</strong> {dayThreeWeather.humidity}%
          </p>
        </div>
        <div>
          <h4 className="md:text-lg sm:text-md">{dayFourDate}</h4>
          <p>{dayFourDesc}</p>
          <div className="flex justify-center items-center">
            <img className="w-16" src={dayFourIconUrl} />
          </div>
          <p>{dayFourWeather.temp}° F</p>
          <p>
            <strong>Min:</strong> {dayFourWeather.temp_min}° F
          </p>
          <p>
            <strong>Max:</strong> {dayFourWeather.temp_max}° F
          </p>
          <p>
            <strong>Humidity:</strong> {dayFourWeather.humidity}%
          </p>
        </div>
        <div>
          <h4 className="md:text-lg sm:text-md">{dayFiveDate}</h4>
          <p>{dayFiveDesc}</p>
          <div className="flex justify-center items-center">
            <img className="w-16" src={dayFiveIconUrl} />
          </div>
          <p>{dayFiveWeather.temp}° F</p>
          <p>
            <strong>Min:</strong> {dayFiveWeather.temp_min}° F
          </p>
          <p>
            <strong>Max:</strong> {dayFiveWeather.temp_max}° F
          </p>
          <p>
            <strong>Humidity:</strong> {dayFiveWeather.humidity}%
          </p>
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
  dayOneIcon: PropTypes.string,

  dayTwoWeather: PropTypes.any,
  dayTwoDate: PropTypes.string,
  dayTwoDesc: PropTypes.string,
  dayTwoIcon: PropTypes.string,

  dayThreeWeather: PropTypes.any,
  dayThreeDate: PropTypes.string,
  dayThreeDesc: PropTypes.string,
  dayThreeIcon: PropTypes.string,

  dayFourWeather: PropTypes.any,
  dayFourDate: PropTypes.string,
  dayFourDesc: PropTypes.string,
  dayFourIcon: PropTypes.string,

  dayFiveWeather: PropTypes.any,
  dayFiveDate: PropTypes.string,
  dayFiveDesc: PropTypes.string,
  dayFiveIcon: PropTypes.string,
};
