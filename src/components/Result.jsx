import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Result = ({ weatherData, historyData }) => {
  // Mapping historyData to create list items
  const historyItems = historyData.map((item, index) => {
    return (
      <li
        className="text-center block text-blue-500 font-bold cursor-pointer"
        key={index}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      {/* Conditional rendering based on weatherData */}
      {weatherData.length !== 0 ? (
        <div className="wrapper">
          <div className="sidebar">
            <div>
              <h1 className="text-center p-3 text-2xl mt-2 text-black-900 font-bold ">
                {weatherData.location.name}
              </h1>

              <div className="weather-icon">
                <img
                  id="icon"
                  className="rounded-full ring-1 ring-gray-200"
                  src={weatherData.forecast.forecastday[0].day.condition.icon}
                  alt=""
                />
              </div>
              <div className="temperature">
                <h1 id="temp">{weatherData.current.temp_c}</h1>
                <span className="temp-unit">°C</span>
              </div>
              <div className="date-time">
                <p id="date-time">{weatherData.location.localtime}</p>
              </div>
              <div className="divider" />
              <div className="condition-rain">
                <div className="condition">
                  <i className="fas fa-cloud" />
                  <p id="condition">
                    condition :{" "}
                    {weatherData.forecast.forecastday[0].day.condition.text}
                  </p>
                </div>
                <div className="rain">
                  <i className="fas fa-tint" />
                  <p id="rain">perc - 0%</p>
                </div>
              </div>
            </div>
            <div className="location">
              <div className="location-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="location-text">
                <p id="condition" className="text-center">
                  Location: {weatherData.location.name},
                  {weatherData.location.region}, {weatherData.location.country}
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <nav>
              <ul className="options">
                <button className="hourly">today</button> -
                <button className="week active">week</button>
              </ul>
              <ul className="options units">
                <button className="celcius active">°C</button>
                <button className="fahrenheit">°F</button>
              </ul>
            </nav>
            <div className="cards" id="weather-cards" />

            {/* Grid for weather forecast */}
            <div className="grid grid-cols-7 gap-2">
              {/* Mapping forecast data to create forecast boxes */}
              {weatherData.forecast.forecastday.map((forecast, index) => (
                <div
                  className="box-border h-4/5 max-w-full p-4 px-4 bg-white rounded-xl shadow-md dark:bg-gray-800"
                  key={index}
                >
                  <p className="text-center">{forecast.date}</p>
                  <img
                    className="rounded-full p-2"
                    src={forecast.day.condition.icon}
                  />
                  <p className="text-center mb-8">
                    {forecast.day.avgtemp_c}°c
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="highlights">
              <h2 className="heading">today's highlights</h2>
              <div className="cards">
                {/* Highlight cards */}
                <div className="card2">
                  <h4 className="card-heading">Rain Status</h4>
                  <div className="content text-center">
                    <p className="humidity">
                      {
                        weatherData.forecast.forecastday[0].hour[0]
                          .chance_of_rain
                      }
                      %
                    </p>
                    <img
                      className="w-12 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/3520/3520675.png"
                    />
                  </div>
                </div>
                <div className="card2">
                  <h4 className="card-heading ">Sunrise &amp; Sunset</h4>
                  <div className="content">
                    <h2 className="text-center text-2lg text-green-700 font-bold ">
                      {weatherData.forecast.forecastday[0].astro.sunrise}
                    </h2>
                    <h2 className="text-center text-2lg text-red-700 font-bold ">
                      {weatherData.forecast.forecastday[0].astro.sunset}
                    </h2>
                    <img
                      className="w-10 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/2272/2272244.png"
                    />
                  </div>
                </div>
                <div className="card2">
                  <h4 className="card-heading ">Moonrise &amp; Moonset</h4>
                  <div className="content">
                    <h2 className="text-center text-2lg text-green-700 font-bold ">
                      {weatherData.forecast.forecastday[0].astro.moonrise}
                    </h2>
                    <h2 className="text-center text-2lg text-red-700 font-bold ">
                      {weatherData.forecast.forecastday[0].astro.moonset}
                    </h2>
                    <img
                      className="w-10 rounded-full"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-moon-1522720-1289406.png?f=webp"
                    />
                  </div>
                </div>
                <div className="card2">
                  <h4 className="card-heading">Humidity</h4>
                  <div className="content">
                    <p className="humidity">{weatherData.current.humidity}</p>
                    <img
                      className="w-10 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/5664/5664993.png"
                    />
                  </div>
                </div>
                <div className="card2">
                  <h4 className="card-heading">Wind Status</h4>
                  <div className="content">
                    <h2 className="text-center text-2lg text-black-700 font-bold ">
                      {weatherData.current.wind_kph} km/h
                    </h2>
                    <img
                      className="w-10 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/10461/10461595.png"
                    />
                  </div>
                </div>
                <div className="card2">
                  <h4 className="card-heading">Air Quality</h4>
                  <div className="content">
                    <p className="air-quality">
                      {weatherData.current.air_quality.co}
                    </p>
                    <img
                      className="w-10 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/128/5024/5024369.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // If weatherData is empty, show a message
        <h5 className="text-center text-2lg mt-2 text-blue-900 font-bold ">
          Please Enter The City Name...
        </h5>
      )}
    </>
  );
};

export default Result;
