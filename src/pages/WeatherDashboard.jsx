import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import WeatherCard from '../components/WeatherCard.jsx';

const DEFAULT_CITIES = ["Sao Paulo", "Shanghai", "Tokyo", "Delhi", "Dhaka"];
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

async function fetchCity(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
        if(!response.ok) {
            throw new Error(`City not found: ${city}`);
        }
        return await response.json();
}

export default function WeatherDashboard() {
    const [cities, setCities] = useState([]);
    const [searched, setSearched] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadDefaults() {
            try {
                const cityData = await Promise.all(DEFAULT_CITIES.map(fetchCity));
                setCities(cityData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } 
        loadDefaults();
}, []);

    const handleSearch = async (city) => {
        try {
            setLoading(null);
            const data = await fetchCity(city);
            setSearched(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setSearched(null);
        }
};

    return (
        <div className="p-4">
           <h1 className="text-3xl font-bold text-blue-600 mb-4">Weather Dashboard</h1>

           <div className="mt-4">
                <SearchBar onSearch={handleSearch} />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {searched &&(
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold mb-2">Search Result</h2>
                    <WeatherCard weather={searched} />
                </div>
            )}

            <h2 className="text-center text-2xl font-semibold mt-6 mb-2">Major Cities</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {cities.map((city) => (
                    <WeatherCard key={city.id} weather={city} />
                ))}
            </div>  
            )}
        </div>
    )
};