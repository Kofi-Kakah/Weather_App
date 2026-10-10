import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
            onSearch(city.trim());
        setCity('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a city..."
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </form>
    )

}