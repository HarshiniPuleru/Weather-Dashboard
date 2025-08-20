import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateWeather}){
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const Api = import.meta.env.VITE_APIKEY;

    let changeCity = (event) => {
        setCity(event.target.value)
    }

    let getWeatherUpdate = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${Api}&units=metric`);
             if (!response.ok) {
                 throw new Error("City not found");
                 }
             const data = await response.json();
             let result = {
                 temp: data.main.temp,
                 tempMin: data.main.temp_min,
                 tempMax: data.main.temp_max,
                 humidity: data.main.humidity,
                 pressure: data.main.pressure,
                 weather: data.weather,
                 lat: data.coord.lat,
                 lon: data.coord.lon,
                 city: city
                 };
             console.log(result);
             return result;
         } catch (err) {
             console.error("Error fetching weather data:", err);
             return null;
         }
     }

    let handleSubmit = async(event) =>{
        event.preventDefault();
        let newInfo = await getWeatherUpdate();
        if (newInfo) {
            updateWeather(newInfo);
        } else {
            // Handle the error case
            updateWeather({ city: "Not Found", weather: [] }); 
        }
        setCity("");
    }

    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required onChange={changeCity} value={city}
                sx={{
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', 
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', 
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white', 
                        },
                        },
                        '& .MuiInputLabel-root': {
                        color: 'white', 
                        '&.Mui-focused': {
                            color: 'white', 
                        },
                        },
                        '& .MuiInputBase-input': {
                        color: 'white', 
                        },
                    }}
                
                />
                <br /><br />
                <Button variant='outlined' type='Submit' startIcon={<SearchIcon/> } >Search</Button>
            </form>    
        </div>
  );
}