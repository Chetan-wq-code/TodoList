import React from "react";

const WeatherCard = ({ data }) => {
console.log(data);
  return (
    <div className="mt-8 p-8 bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 text-white w-full max-w-sm transition-all hover:scale-105">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight">{data.name}</h2>
        <p className="text-lg font-medium opacity-80">{data.weather[0].description}</p>
      </div>

      <div className="flex flex-col items-center my-6">
        <img 
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} 
          alt="weather icon"
          className="w-32 h-32 drop-shadow-lg"
        />
        <span className="text-7xl font-extrabold tracking-tighter">
          {Math.round(data.main.temp)}°C
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
        <div className="text-center">
          <p className="text-sm opacity-70">Humidity</p>
          <p className="text-xl font-bold">{data.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-70">Wind Speed</p>
          <p className="text-xl font-bold">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;