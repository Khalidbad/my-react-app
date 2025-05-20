import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './searchebar.css';
import { useEffect, useState } from 'react';
import Map from '../../assets/icons/map';
import Button from '@mui/material/Button';

const SearchBar = (props) => {
  function GeoLocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation(prev => ({ ...prev, error: 'Geolocation is not supported by your browser.' }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        setLocation(prev => ({ ...prev, error: error.message }));
      }
    );
  }, []);
}
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]); 
  const { onWeatherData, ...rest } = props;
  console.log(value);

  const handleInputChange = async (event, newValue) => {
    setValue(newValue);
    if (newValue && newValue.length > 1) {
      try {
        const geoapifyKey = "bfa624e0cd3f4a9ab6210f94ca4fc514";
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${newValue}&type=city&limit=8&apiKey=${geoapifyKey}`);
        const data = await response.json();
        const cityOptions = data.features?.map(f => f.properties.city || f.properties.name).filter(Boolean);
        setOptions(cityOptions);
      } catch (error) {
        setOptions([]);
        console.error("Error fetching city suggestions:", error);
      }
    } else {
      setOptions([]);
    }
  };
   const handleMapClick = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Reverse geocode to get city name
          const geoapifyKey = "bfa624e0cd3f4a9ab6210f94ca4fc514";
          const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${geoapifyKey}`);
          const data = await response.json();
          const city = data?.features?.[0]?.properties?.city || data?.features?.[0]?.properties?.name;

          if (city) {
            setValue(city); // Update the input
            const weather = await weatherapi(latitude, longitude);
            if (onWeatherData) onWeatherData(weather);
          } else {
            alert("Could not detect your city.");
          }
        } catch (error) {
          console.error("Error with reverse geocoding:", error);
        }
      },
      (error) => {
  console.error("Geolocation error:", error); // Add this
  alert("Error getting location: " + error.message);
}
    );
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (value) {
        try {
          const coords = await geoapi(value);
          if (coords) {
            const weather = await weatherapi(coords.lat, coords.lon);
            if (onWeatherData) onWeatherData(weather); 
          }
        } catch (error) {
          if (onWeatherData) onWeatherData(null);
          console.error("Error fetching weather data:", error);
        }
      }
    };
    fetchWeather();
  }, [value]);

  const geoapi = async (value) => {
    try {
      const geoapifyKey = "bfa624e0cd3f4a9ab6210f94ca4fc514";
      const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${value}&apiKey=${geoapifyKey}`)
      const data = await response.json();
      const coords = data?.features?.[0]?.properties;
      if (coords) {
        console.log("Coordinates:", coords.lat, coords.lon);
        return coords;
      } else {
        console.log("No coordinates found for this city.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  const weatherapi = async (lat, lon) => {
    try {
      const openWeatherKey = "6be5558a1b845d134b4279b13fe45f1f";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather:", error);
      return null;
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '125%', margin: '0 auto' }}>
      <Autocomplete
        options={options}
        value={value}
        onInputChange={handleInputChange}
        freeSolo
        style={{ flex: 1, minWidth: 280, maxWidth: 480 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search city..."
            fullWidth
            size="medium"
            sx={{
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              input: { color: '#222831', fontWeight: 500 },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: '#222831' }} />
                </InputAdornment>
              ),
            }}
          />
        )}
        {...rest}
      />
      <Button onClick={handleMapClick} size="medium" variant="outlined" style={{ minWidth: 44, minHeight: 44, padding: 0, borderRadius: 10, marginLeft: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Map width={28} height={28} />
      </Button>
    </div>
  );
}


export default SearchBar;