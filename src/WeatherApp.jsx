import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import Background from "./Background";
import { useState } from "react";
import './WeatherApp.css'

export default function WeatherApp(){
    let [weatherData, setWeatherData] = useState({
    temp: 27.5,               
    tempMin: 25.0,            
    tempMax: 30.2,            
    humidity: 65,             
    pressure: 1012,           
    weather: [{ description: "clouds", main: "Clouds", icon: "04n" }],
    lat: 40.7128,             
    lon: -74.0060,            
    city:"Delhi"
    });

    let [error, setError] = useState(false);

    let updateWeather = (newInfo) => {
        if (newInfo.city === "Not Found") {
            setError(true);
        } else {
            setError(false);
            setWeatherData(newInfo);
        }
    }

    return(
        <div className="weather-app-container">
            <h2 style={{color:"white"}}>Weather App</h2>
            <Background weather={weatherData}/>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weatherData}/>
        </div>
    )
}