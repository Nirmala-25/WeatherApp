import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike:35.61,
        temp:28.99,
        tempMin:28.99,
        tempMax:29.94,
        humidity:84,
        weather:"drizzle",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather app by Nirmala ! </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}