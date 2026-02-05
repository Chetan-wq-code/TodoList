import React, { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("Bengaluru");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (searchCity) => {
    if (!searchCity) return;
    setLoading(true);
    setError("");
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${API_KEY}`;
      
      // Step 1: Make the request
      const response = await fetch(url);
      
      // Step 2: check for errors 
      if (!response.ok) {
        throw new Error("City not found. Please check the spelling.");
      }

      // Step 3: Convert the response to JSON
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
   
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const weatherCondition = weatherData ? weatherData.weather[0].main : 'Default';
  const backgroundGradient = getBackgroundClass(weatherCondition);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} flex flex-col items-center justify-center p-6 transition-all duration-700`}>
      <h1 className="text-4xl font-black text-white mb-8 drop-shadow-lg">Weather Forecast</h1>
      
      <form onSubmit={handleSearch} className="w-full max-w-sm flex gap-2">
        <input 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button 
          type="submit"
          className="bg-white text-indigo-700 px-6 py-3 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-10 animate-pulse font-medium">Fetching weather data...</p>}
      {error && <p className="mt-6 font-semibold bg-red-900/20 px-4 py-2 rounded-lg text-red-200">{error}</p>}

      {/* Show card if data exists and we aren't loading */}
      {weatherData && !loading && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;

// Background Helper Function
const getBackgroundClass = (weatherMain) => {
  switch (weatherMain) {
    case 'Clear':
      return 'from-orange-400 to-blue-500'; // Sunny look
    case 'Clouds':
      return 'from-gray-400 to-blue-300'; // Overcast look
    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      return 'from-slate-700 to-slate-900'; // Rainy/Stormy look
    case 'Snow':
      return 'from-blue-100 to-blue-300'; // Cold look
    case 'Mist':
    case 'Smoke':
    case 'Haze':
      return 'from-gray-500 to-gray-700'; // Foggy look
    default:
      return 'from-blue-500 to-indigo-800'; // Default
  }
};