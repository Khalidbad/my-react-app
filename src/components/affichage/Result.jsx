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
import FewCloud from '../../assets/icons/fewcloud';
import Thunderstorm from '../../assets/icons/thunderstorm';
import Snow from '../../assets/icons/snow';
import Mist from '../../assets/icons/mist';
import Sun from '../../assets/icons/sun';
import { motion } from 'framer-motion';



const Result = ({ weather }) => {
  const city = weather?.name || 'City';
  const country = weather?.sys?.country || '';
  const temp = weather?.main?.temp ? `${Math.round(weather.main.temp)}°C` : '--°C';
  const wind = weather?.wind?.speed ? `${Math.round(weather.wind.speed)} km/h` : '-- km/h';
  const humidity = weather?.main?.humidity ? `${weather.main.humidity}%` : '--%';
  const sunrise = weather?.sys?.sunrise ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';
  const sunset = weather?.sys?.sunset ? new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';
  const date = weather?.dt ? new Date(weather.dt * 1000).toLocaleString() : new Date().toLocaleString();
   
 const RenderIcon = () => {
  switch (weather?.weather[0]?.icon.substring(0,2)){
    case '01':
      return <Sun width={64} height={64}/>;
    case '02' :
      return <FewCloud width={64} height={64}/> 
    case '03' :
      return <Fog width={64} height={64}/>
    case '04' :
      return <Fog width={64} height={64}/>
    case '09' : 
      return <Rain width={64} height={64}/>
    case '10' :
      return <Rain width={64} height={64}/>
    case '11' :
      return <Thunderstorm width={64} height={64}/>
    case '13' : 
      return <Snow width={64} height={64}/>
    case '50' :
      return <Mist width={64} height={64}/>
  }
 }
  return (
    <>
    <motion.div className='data' 
                initial={{ left: '100vw' }}
                animate={{ left: '0' }}
                transition={{ duration: 2, type: 'spring', bounce: 0.4 }}
    >
     
      <div className='city-date-block' style={{ position: 'absolute', top: 32, left: 0, right: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
        <span className='city-name'>{city}{country && `, ${country}`} <span style={{ display: 'inline-block' }}><Map color="#00e1ff" /></span></span>
        <span className='date-line'>{date}<span style={{ display: 'inline-block' }}><Time color="#ffb300" /></span></span>
         <motion.span 
         
      className="fog-icon"
       style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px", // adjust size as needed
        width: "200px",
        background: "#0d1117", // optional dark background for contrast
        borderRadius: "1rem", // optional rounded corners
      }}
      drag
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.1, 1],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      style={{
        filter: "drop-shadow(0 0 6px rgba(200,200,255,0.6))",
      }}
    >
      <RenderIcon />
    </motion.span>
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
    </motion.div>
    </>
  )
}

export default Result;