import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './searchebar.css';
import { useEffect, useState } from 'react';

const SearchBar = (props) => {
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
    <Autocomplete
      options={options}
      value={value}
      onInputChange={handleInputChange}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Search city..."
          fullWidth
          size="small"
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
  );
}


export default SearchBar;