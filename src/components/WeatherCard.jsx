export default function WeatherCard({ weather }) {
  const condition = weather.weather[0];

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-64">
            <h2 className="text-xl font-bold mb-2">{weather.name}, {weather.sys.country}</h2>

            <img src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
            alt={condition.description}
            />

            <p className="text-2xl font-semibold">{Math.round(weather.main.temp)}°C</p>
            <p className="text-gray-600">{condition.description}</p>

            <div className="mt-4">
                <p className="text-gray-600">Feels like: {Math.round(weather.main.feels_like)}°C</p>
                <p className="text-gray-600">Humidity: {weather.main.humidity}%</p>
                <p className="text-gray-600">Wind: {weather.wind.speed} m/s</p>
                <p className="text-gray-600">Pressure: {weather.main.pressure}</p>
            </div>
        </div>
    )
}