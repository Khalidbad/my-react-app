import React from 'react'
import  './Result.css';
import Soleil from '../../assets/icons/soleil';
import Sunrise from '../../assets/icons/sunrise';
import Wind from '../../assets/icons/wind';
import Humidity from '../../assets/icons/humidity';
import Temp from '../../assets/icons/temp';
import Map from '../../assets/icons/map';
import Time from '../../assets/icons/time';

const Result = () => {
  return (
    <>
    <div className='data'>
       <span className='stats-names'>
             Casablanca <span style={{ display: 'inline-block' }}><Map /></span>
        </span>
        <span className='stats-names'>
        14 mai 2025 <span style={{ display: 'inline-block' }}><Time /></span>
        </span>
       
        <span className='stats-names'> </span>
        <span className='stats-names'>35 °C </span>
        <span className='stats-names'>To hoot today</span> 
      <div className='icons-stats'>
        <div>
          <span><Sunrise /></span>
           <span className='stats-nbr'>20</span>
        </div>
        <span className='ligne'></span>

        
        <div>
         <span><Wind /></span>
         <span className='stats-nbr'>30</span>
        </div>
        <span className='ligne'></span>

        
          
        <div>
          <span><Humidity /></span>
          <span className='stats-nbr'>40</span>
        </div> 
        <span className='ligne'></span>

        <div>
        <span><Sunrise /></span>
        <span className='stats-nbr'>50</span>
        </div> 
        <span className='ligne'></span>

         <div>
         <span><Temp /></span>
         <span className='stats-nbr'>70</span>
         </div>
          

        </div>
       

        

    </div>
    
    </>
  )
}

export default Result;