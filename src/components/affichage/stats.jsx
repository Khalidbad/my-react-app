import Soleil from '../../assets/icons/soleil';
import Rain from '../../assets/icons/rain';
import Fog from '../../assets/icons/fog';
import FewCloud from '../../assets/icons/fewcloud';
import Thunderstorm from '../../assets/icons/thunderstorm';
import Snow from '../../assets/icons/snow';
import Mist from '../../assets/icons/mist';
import Sun from '../../assets/icons/sun';
import { motion } from 'framer-motion';


function getIconByCode(icon) {
  switch (icon?.substring(0,2)) {
    case '01':
      return <Sun width={48} height={48}/>;
    case '02':
      return <FewCloud width={48} height={48}/>;
    case '03':
      return <Fog width={48} height={48}/>;
    case '04':
      return <Fog width={48} height={48}/>;
    case '09':
      return <Rain width={48} height={48}/>;
    case '10':
      return <Rain width={48} height={48}/>;
    case '11':
      return <Thunderstorm width={48} height={48}/>;
    case '13':
      return <Snow width={48} height={48}/>;
    case '50':
      return <Mist width={48} height={48}/>;
    default:
      return <Sun width={48} height={48}/>;
  }
}

export default function Stats({ weather }) {
  console.log("Stats received:", weather);

  const daily = weather && weather.daily ? weather.daily.slice(-3) : null;

  if (daily) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, margin: '2rem auto', background: '#f7f7f7', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, maxWidth: 600 }}>
        {daily.map((d, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90, background: '#fff', borderRadius: 8, padding: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
            <div>{getIconByCode(d.weather?.[0]?.icon)}</div>
            <div style={{ fontWeight: 600, fontSize: 18, margin: '4px 0' }}>{Math.round(d.temp.day - 273.15)}°C</div>
            <div style={{ color: '#3ec6e0', fontWeight: 500 }}>{new Date(d.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
          </div>
        ))}
      </div>
    );
  }

  if (!weather || !weather.main) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 120, background: '#f7f7f7', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 32, margin: '2rem auto', maxWidth: 400, fontWeight: 500, color: '#888' }}>
        Select city options      </div>
    );
  }
  const today = new Date();
  const days = [2, 1, 0].map(offset => {
    const date = new Date(today);
    date.setDate(today.getDate() - offset);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      temp: Math.round(weather.main.temp),
      icon: weather.weather?.[0]?.icon
    };
  });
  return (
    <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, margin: '2rem auto', background: '#f7f7f7', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, maxWidth: 500 }}
                initial={{ y: '100vw' }}
                animate={{ y: '0' }}
                transition={{ duration: 2, type: 'spring', bounce: 0.4 }}>
      {days.map((f, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90, background: '#fff', borderRadius: 8, padding: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <div>{getIconByCode(f.icon)}</div>
          <div style={{ fontWeight: 600, fontSize: 18, margin: '4px 0' }}>{f.temp}°C</div>
          <div style={{ color: '#3ec6e0', fontWeight: 500 }}>{f.day} </div>
        </div>
      ))}
    </motion.div>
  );
}
