import './App.css';
import SearchBar from './components/searchbar/searchebar';
import img from'./assets/img/weather.png'
import Result from './components/affichage/Result';
import Stats from './components/affichage/stats';
import React, { useState } from 'react'; 
import Stat from './assets/icons/stat';
import DataIcon from './assets/icons/data';

function App() {
  const [weather, setWeather] = useState(null);
   const [showStats, setShowStats] = useState(false);


  return (
    <div className="App" style={{backgroundImage: `url(${img})`}} >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <div style={{ width: '250px' }}>
          <SearchBar size="small" onWeatherData={setWeather} />
        </div>
      </div>
      {/* <Result weather={weather} /> */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button onClick={() => setShowStats((prev) => !prev)} style={{
          background: '#3ec6e0',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 24px',
          fontWeight: 600,
          fontSize: '1.1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(30,60,114,0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {showStats ? <DataIcon width={28} height={28} style={{marginRight: 6}} /> : <Stat width={28} height={28} style={{marginRight: 6}} />}
          {showStats ? ' DATA' : ' Expectations'}
        </button>
      </div>

      {/* Conditional Rendering */}
      {showStats ? (
        <Stats weather={weather} />
      ) : (
        <Result weather={weather} />
      )}
    </div>
  );
}

export default App;
