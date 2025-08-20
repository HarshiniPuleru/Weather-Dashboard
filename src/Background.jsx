import { useState, useEffect } from "react";
import './Background.css'

export default function Background({weather}){
    const [videoSrc, setVideoSrc] = useState('/videos/sunny.mp4');

    useEffect(() => {
    if (!weather || !weather.weather || weather.weather.length === 0) {
      setVideoSrc('/videos/sunny.mp4');
      return;
    }

    const { main, icon } = weather.weather[0];

    const condition = main.toLowerCase(); 
    const isNight = icon.includes('n');
    console.log(condition);
    console.log(icon);
    console.log(isNight)
    console.log(weather);


    const weatherVideoMap = {
      'clear': '/videos/sunny.mp4',
      'clouds': '/videos/clouds.mp4',
      'rain': '/videos/rain.mp4',
      'thunderstorm': '/videos/thunder.mp4',
      'snow': '/videos/snow.mp4',
      'mist': '/videos/fog.mp4',
      'haze': '/videos/haze.mp4'
    };
    let selectedVideo;
          if (isNight) {
              if (condition === 'clear' || condition === 'clouds') {
                  selectedVideo = '/videos/night.mp4';
              } 
              else {
                  selectedVideo = weatherVideoMap[condition] || '/videos/sunny.mp4';
              }
          } 
          else {
              selectedVideo = weatherVideoMap[condition] || '/videos/sunny.mp4';
          }
        
        setVideoSrc(selectedVideo);
    }, [weather]);
    return(
        <video
      className="background-video"
      autoPlay
      muted
      loop
      playsInline
      key={videoSrc}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
    );
}