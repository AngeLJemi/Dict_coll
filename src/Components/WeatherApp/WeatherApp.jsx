import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assests/search.png';
import clear_icon from '../Assests/clear.png';
import cloud_icon from '../Assests/cloud.png';
import drizzle_icon from '../Assests/drizzle.png';
import rain_icon from '../Assests/rain.png';
import snow_icon from '../Assests/snow.png';
import wind_icon from '../Assests/wind.png';
import humidity_icon from '../Assests/humidity.png';

export const WeatherApp = () => {
  return (
    <div className="container">
        <div className="top-view">
            <input type="text" className="search"  placeholder='Search'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°C </div>
        <div className="weather-location">Chennai</div>
        <div className="data-contianer">
            <div className="elements">
                <img src={humidity_icon} alt="" />
                <div className="data">
                    <div className="humidity-percent">80%</div>
                    <div className="wind-speed">40km/hr</div>
                </div>
            </div>
            <div className="elements">
                <img src={wind_icon} alt="" />
                <div className="data">
                    <div className="humidity-percent">20%</div>
                    <div className="wind-speed">70km/hr</div>
                </div>
            </div>
        </div>
    </div>
  )
}
