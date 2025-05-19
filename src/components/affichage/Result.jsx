import React from 'react'
import  './Result.css';
import Soleil from '../../assets/icons/soleil';
import Sunrise from '../../assets/icons/sunrise';
import Wind from '../../assets/icons/wind';
import Humidity from '../../assets/icons/humidity';
import Temp from '../../assets/icons/temp';
import Map from '../../assets/icons/map';
import Time from '../../assets/icons/time';
import Fog from '../../assets/icons/fog';
import Rain from '../../assets/icons/rain';

const Result = ({ weather }) => {
  const city = weather?.name || 'City';
  const country = weather?.sys?.country || '';
  const temp = weather?.main?.temp ? `${Math.round(weather.main.temp)}°C` : '--°C';
  const wind = weather?.wind?.speed ? `${Math.round(weather.wind.speed)} km/h` : '-- km/h';
  const humidity = weather?.main?.humidity ? `${weather.main.humidity}%` : '--%';
  const sunrise = weather?.sys?.sunrise ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';
  const sunset = weather?.sys?.sunset ? new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';
  const date = weather?.dt ? new Date(weather.dt * 1000).toLocaleString() : new Date().toLocaleString();
  const renderIcon = () => {
    const main = weather?.weather?.[0]?.main;
    switch (main) {
      case "Snow":
        return <span role="img" aria-label="snow">❄️</span>; // fallback to emoji
      case "Clear":
        return <Soleil width={64} height={64} />;
      case "Clouds":
        return <Fog width={64} height={64} />;
      case "Rain":
        return <Rain width={64} height={64} />;
      case "Mist":
      case "Fog":
        return <Fog width={64} height={64} />;
      default:
        return <Temp />; 
    }
  };

  return (
    <>
    <div className='data'>
      <div className='city-date-block' style={{ position: 'absolute', top: 32, left: 0, right: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <span className='city-name'>{city}{country && `, ${country}`} <span style={{ display: 'inline-block' }}><Map color="#00e1ff" /></span></span>
        <span className='date-line'>{date}<span style={{ display: 'inline-block' }}><Time color="#ffb300" /></span></span>
        <span className='fog-icon'>
          {renderIcon()}
        </span>
      </div>
      <div className='icons-stats'> 
        <div className='icon-label'>
          <span><Sunrise /></span>
          <div className='icon-name'>Sunrise</div>
          <span className='stats-nbr'>{sunrise}</span>
        </div>
        <span className='ligne'></span>

        <div className='icon-label'>
          <span><Wind /></span>
          <div className='icon-name'>Wind</div>
          <span className='stats-nbr'>{wind}</span>
        </div>
        <span className='ligne'></span>

        <div className='icon-label'>
          <span><Humidity /></span>
          <div className='icon-name'>Humidity</div>
          <span className='stats-nbr'>{humidity}</span>
        </div> 
        <span className='ligne'></span>

        <div className='icon-label'>
        <span><Sunrise /> </span>
        <div className='icon-name'>Sunset</div>
        <span className='stats-nbr'>{sunset}</span>
        </div> 
        <span className='ligne'></span>

         <div className='icon-label'>
         <span><Temp /></span>
         <div className='icon-name'>Temp</div>
         <span className='stats-nbr'>{temp}</span>
         </div>
      </div>
    </div>
    </>
  )
}

export default Result;