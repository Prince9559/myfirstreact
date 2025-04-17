import './WeatherApp.css';

import React, {useState } from "react";
import axios from "axios";

function WeatherApp() {

    
    const [inputCity, setInputCity] = useState('');
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const showWeather = () => {
        console.log("Showing weather");
        let saveddata=localStorage.getItem(city.toLowerCase().trim());
        if(saveddata==null)
        {
            console.log("No dataa ");
            return;
        }
        console.log(saveddata);
    }

    const Sky = () => {        
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adbf31067812098f4c920514c13e8fd6&units=metric`;
        
        axios.get(baseURL).then((response) => {
            
                setWeather(response.data);
                localStorage.setItem(city.toLowerCase().trim(), JSON.stringify(response.data));
                showWeather();
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
                setWeather(null);
                showWeather();

            });
    };

    const handleInputChange = (event) => {
        setInputCity(event.target.value);
    };

    const handleSearch = () => {
        setCity(inputCity);
        Sky();
    };
    function storeData() 
    {
        if (localStorage) 
        {
            document.getElementById('output').innerHTML = '✅ Data stored successfully!';
        } 
        else
        {
           document.getElementById('output').innerHTML='⚠️ Not Store Data!';
        }
    }

    function retrieveData() {
        
        // document.getElementById('output').innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            document.getElementById('output').innerHTML += `${key}: ${value}<br>`;
        }
    }

    return (
        <div>

            <img className='ball' src='pic/sir.jpg'></img>

               <span className='search-icon'>🔍</span>
            
                <input  className='fading-border' type="text"value={inputCity} onChange={handleInputChange}placeholder="Search.."/>
                <br></br>
                <button onClick={handleSearch}className='col2'>Get Weather</button>
                <button className='col7'onClick={storeData}>Store Data</button>
                <button className='col8'onClick={retrieveData}>Retrieve Data</button>

                <p id="output"></p>

                {weather && (
                <div className='col4'>
                    <h2>⛅️ {weather.name}</h2>
                    <p><b>Temperature : </b>{weather.main.temp}°C</p>
                    <p><b>Weather : </b>{weather.weather[0].main}</p>
                    <p><b>Description : </b>{weather.weather[0].description}</p>
                    <p><b>Humidity : </b>{weather.main.humidity}%</p>
                    <p><b>Wind Speed : </b>{weather.wind.speed} m/s</p>
                </div>
            )}

        
        </div>
    );
};

export default WeatherApp;

