import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL= "https://media.istockphoto.com/id/683973882/photo/bluured-photo-of-indian-road-traffic-during-rain.jpg?s=1024x1024&w=is&k=20&c=ffvQzP7uWuLYsdbpWdeEm0KRYA_JVCY8lFKQFevJWww=";
    
    let COLD_URL= "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL= "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
    let RAIN_URL= "https://images.unsplash.com/photo-1529942523273-74d30bfb6989?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
    <div className="InfoBox">
       <div className='cardcontainer'>    
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity >80 
          ? INIT_URL
          :info.temp >15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity >80 
          ? <ThunderstormIcon/>
          :info.temp >15
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min Temp ={info.tempMin}&deg;C</p>
          <p>Max Temp ={info.tempMax}&deg;C</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like = {info.feelsLike} &deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div> 
    </div>
    );
}