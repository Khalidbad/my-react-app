import Soleil from '../../assets/icons/soleil';
import Rain from '../../assets/icons/rain';
import Fog from '../../assets/icons/fog';

export default function Stats({ weather }) {
  console.log("Stats received:", weather);

  // Use daily forecast if available (from One Call API)
  const daily = weather && weather.daily ? weather.daily.slice(-3) : null;

  const renderIcon = (main) => {
    const m = main ? main.toLowerCase() : '';
    if (m === 'rain' || m === 'drizzle' || m === 'thunderstorm') return <Rain width={40} height={40} />;
    if (m === 'clear') return <Soleil width={40} height={40} />;
    if (m === 'clouds' || m === 'mist' || m === 'fog' || m === 'haze' || m === 'smoke') return <Fog width={40} height={40} />;
    if (m === 'snow') return <span style={{fontSize: 32}}>❄️</span>;
    return <span style={{fontSize: 32}}>🌡️</span>;
  };

  if (daily) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, margin: '2rem auto', background: '#f7f7f7', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, maxWidth: 600 }}>
        {daily.map((d, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90, background: '#fff', borderRadius: 8, padding: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            {renderIcon(d.weather[0].main)}
            <div style={{ fontWeight: 600, fontSize: 18, margin: '4px 0' }}>{Math.round(d.temp.day - 273.15)}°C</div>
            <div style={{ color: '#3ec6e0', fontWeight: 500 }}>{new Date(d.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
          </div>
        ))}
      </div>
    );
  }

  // fallback for current weather only
  if (!weather || !weather.main) {
    return <div>No weather data available.</div>;
  }
  const today = new Date();
  const days = [2, 1, 0].map(offset => {
    const date = new Date(today);
    date.setDate(today.getDate() - offset);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      temp: Math.round(weather.main.temp),
      icon: weather.weather[0].main
    };
  });
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, margin: '2rem auto', background: '#f7f7f7', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, maxWidth: 500 }}>
      {days.map((f, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90, background: '#fff', borderRadius: 8, padding: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          {renderIcon(f.icon)}
          <div style={{ fontWeight: 600, fontSize: 18, margin: '4px 0' }}>{f.temp}°C</div>
          <div style={{ color: '#3ec6e0', fontWeight: 500 }}>{f.day}</div>
        </div>
      ))}
    </div>
  );
}
