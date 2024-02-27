import { PrimaryWrapper } from "./styles.module";
import {
  BsCloudFogFill,
  BsCloudFill,
  BsCloudDrizzleFill,
} from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { Context } from "../WeatherContext";
import { TiWeatherWindyCloudy } from "react-icons/ti";

export const api_key = "caac14accda59822802dd2b466daa4b9";
export const api_endPoint = "https://api.openweathermap.org/data/2.5/";

const DisplayWeather: React.FC = () => {
  const fetchCurrentWeather = async (lat: number, lon: number) => {
    // Fetch current data function
    const url = `${api_endPoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const reponse = await axios.get(url);
    return reponse.data;
  };

  const { weatherData, setWeather, isLoading, setIsLoading } = useContext(
    // Destructure the values from the context
    Context
  ) || {
    weatherData: null,
    setWeather: () => {},
    isLoading: false,
    setIsLoading: () => {},
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // fetch the current  weather data and display by setting it
      const { latitude, longitude } = position.coords;

      Promise.all([fetchCurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setWeather(currentWeather);
          setIsLoading(true);
          console.log(currentWeather);
        }
      );
    });
  }, []);

  return (
    <PrimaryWrapper>
      {weatherData && isLoading ? (
        <>
          <div className="container">
            <div className="weatherContent">
              <h1> {weatherData.name}</h1>
              <span> {weatherData.sys.country}</span>
              <div className="weatherIcon">
                {weatherData.weather[0].main === "Mist" && <BsCloudFogFill />}
                {weatherData.weather[0].main === "Rain" && (
                  <BsCloudDrizzleFill />
                )}
                {weatherData.weather[0].main === "Clear" && <IoIosSunny />}
                {weatherData.weather[0].main === "Clouds" && <BsCloudFill />}
                {weatherData.weather[0].main === "Smoke" && (
                  <TiWeatherWindyCloudy />
                )}
              </div>

              <h2 className="temperature">
                {weatherData.main.temp.toFixed(0)}
                <TbTemperatureCelsius className="celcius" />

                <div className="high-low">
                  <h3>{weatherData.main.temp_max.toFixed(0)}</h3>
                  <h3>{weatherData.main.temp_min.toFixed(0)}</h3>
                </div>
              </h2>
              <h2 className="condition">{weatherData.weather[0].main}</h2>
            </div>
          </div>
        </>
      ) : (
        <div className="isLoading">
          <LuLoader />
        </div>
      )}
    </PrimaryWrapper>
  );
};

export default DisplayWeather;
