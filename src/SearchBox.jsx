import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city, setCity]= useState("");
    let[error, setError]= useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="04241587e81c31e28745b85cb64d65f1";

    let getWeatherInfo=async()=>{
      try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jesonResponse = await response.json();
     
      let result={
        city:city,
        temp: jesonResponse.main.temp,
        tempMin: jesonResponse.main.temp_min,
        tempMax: jesonResponse.main.temp_max,
        humidity: jesonResponse.main.humidity,
        feelsLike: jesonResponse.main.feels_like,
        weather: jesonResponse.weather[0].description,
      };
      console.log(result);
      return result;
      } catch(err){
        throw err;
      }
      
    };

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
        try{
            evt.preventDefault();
        console.log("City: ", city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    };
    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant='contained' type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>"No such place exit!"</p>}
            </form>
        </div>
    )
}