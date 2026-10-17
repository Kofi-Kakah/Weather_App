# Weather Dashboard

A modern, responsive weather dashboard built with React and Vite. Search any city worldwide to view current weather conditions including temperature, humidity, wind speed, pressure, and "feels like" temperature. Major cities are displayed on load for quick reference, and recent searches are saved to localStorage.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-4B0082?style=flat-square)](https://openweathermap.org/api)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

## Features

- **Search by city** — Look up current weather for any city in the world
- **Current conditions** — Temperature, "feels like", humidity, wind speed, and pressure
- **Weather icons** — Dynamic icons from OpenWeatherMap reflecting current conditions
- **Major cities on load** — A default grid of major world cities (e.g. Tokyo, Delhi, New York, London) loads automatically
- **Recent searches** — Last 5 searched cities are saved to localStorage and shown as quick-access buttons
- **Responsive grid** — City cards adapt from 1 to 4 columns based on screen size
- **Loading & error states** — Spinner during data fetch and clear error messages for invalid cities
- **Dark mode ready** — Geist Variable font and shadcn/ui theming with CSS variables
- **Built with shadcn/ui** — Accessible Button and Card primitives via Radix UI

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui, Radix UI |
| Icons | lucide-react |
| Font | Geist Variable |
| Weather Data | OpenWeatherMap API |
| Linting | ESLint |

## Project Structure

```
weather-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Root component
│   ├── App.css               # Tailwind imports + shadcn design tokens
│   ├── pages/
│   │   └── WeatherDashboard.jsx  # Main dashboard logic
│   └── components/
│       ├── WeatherCard.jsx   # Displays a single city's weather
│       ├── SearchBar.jsx     # City search form
│       ├── Spinner.jsx       # Loading spinner
│       └── ui/
│           ├── button.jsx    # shadcn Button
│           └── card.jsx      # shadcn Card
├── index.html
├── vite.config.js            # Vite config with React + Tailwind plugins
├── tailwind.config.js
├── jsconfig.json
├── eslint.config.js
├── .env                      # VITE_OPEN_WEATHER_API_KEY
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- An [OpenWeatherMap API key](https://home.openweathermap.org/users/sign_up) (free tier works)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
VITE_OPEN_WEATHER_API_KEY=your_openweather_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:5173` in your browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the project |

## Usage

1. **View major cities** — On load, the dashboard shows weather cards for a default set of major cities around the world.
2. **Search a city** — Type a city name into the search bar and click **Search** (or press Enter).
3. **Recent searches** — Previously searched cities appear as clickable buttons below the search bar (limited to the last 5).
4. **View details** — Each card shows the city name and country, weather icon, temperature in °C, condition description, feels-like temperature, humidity, wind speed, and pressure.

## API

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

The API key is loaded from `import.meta.env.VITE_OPEN_WEATHER_API_KEY`. Never commit your `.env` file to version control — it is listed in `.gitignore`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [shadcn/ui](https://ui.shadcn.com/) for accessible UI primitives
- [lucide-react](https://lucide.dev/) for icons
- [Geist](https://vercel.com/font) for typography
