import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css'


export default function InfoBox({info}){
    return(
        <div><br />
            <Card sx={{ maxWidth: 345 }} className="MuiCard-root">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature: {info.temp}</p>
            <p>Humidity: {info.humidity}</p>
            <p>Weather: {info.weather[0].description}</p>
            <p>Pressure: {info.pressure}</p>
            <span>Latitude: {info.lat}</span>
            &nbsp;&nbsp;
            <span>Longitude: {info.lon}</span>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}