import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import WeatherCard from '../components/WeatherCard.jsx';
import Spinner from '../components/Spinner.jsx';

const DEFAULT_CITIES = ["Sao Paulo", "Shanghai", "Tokyo", "Delhi", "Dhaka", "Mexico City", "Cairo", "Beijing", "Mumbai", "Osaka", "Karachi", "Chongqing", "Istanbul", "Buenos Aires", "Kolkata", "Lagos", "Kinshasa", "Manila", "Tianjin", "Guangzhou"];
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

async function fetchCity(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
        if(!response.ok) {
            throw new Error( `City "${city}" was not found. Please check the spelling and try again.`);
        }
        return await response.json();
}

export default function WeatherDashboard() {
    const [cities, setCities] = useState([]);
    const [searched, setSearched] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [recentSearches, setRecentSearches] = useState(() => {
        try {
        const savedSearches = localStorage.getItem('recentSearches');
        return savedSearches ? JSON.parse(savedSearches) : [];
        } catch (err) {
        console.error("Failed to parse recent searches from localStorage:", err);
        return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }, [recentSearches]);

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
            setRecentSearches((prevSearches) => {
                const filtered = prevSearches.filter((c) => typeof c === "string" && c.toLowerCase() !== city.toLowerCase() !== data.name.toLowerCase ());
                return [data.name, ...filtered].slice(0, 5); // Keep only the last 5 searches
            });
            setError(null);
        } catch (err) {
            setError(err.message);
            setSearched(null);
        }
};

    return (
        <div className="p-4">
           <h1 className="text-center text-3xl font-bold text-blue-600 mb-4">Weather Dashboard</h1>

           <div className="flex justify-center mt-4">
                <SearchBar onSearch={handleSearch} className="" />
            </div>

            {recentSearches.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {recentSearches.map((city, index) => (
                        <button
                            key={index}
                            onClick={() => handleSearch(city)}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        >
                            {city}
                        </button>
                    ))}
                </div>
            )}

            {loading && <Spinner size="h-16 w-16" />}
            {error && <p className="text-red-500">{error}</p>}
            {searched &&(
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold mb-2">Search Result</h2>
                    <WeatherCard weather={searched} />
                </div>
            )}

            <h2 className="text-center text-2xl font-semibold mt-6 mb-2">Major Cities</h2>
            {loading ? (
                <Spinner size="h-16 w-16" />
            ) : (
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {cities.map((city) => (
                    <WeatherCard key={city.id} weather={city} />
                ))}
            </div>  
            )}
        </div>
    )
};