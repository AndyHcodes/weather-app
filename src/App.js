import React, { useState, useEffect } from "react";
import "./App.css";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import ForecastDetails from "./components/forecast-detail";
import getForecasts from "./requests/gerForecasts";
import SearchForm from "./components/search-form";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [query, setQuery] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  console.log(selectedForecast);
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecasts(setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />

      <SearchForm />

      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
