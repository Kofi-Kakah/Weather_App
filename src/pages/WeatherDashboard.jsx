import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import WeatherCard from '../components/WeatherCard.jsx';

const DEFAULT_CITIES = ["Sao Paulo", "Shanghai", "Tokyo", "Delhi", "Dhaka"];
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

async function fetchCity(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

