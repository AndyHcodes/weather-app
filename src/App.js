import React, { useState, useEffect } from "react";
import "./styles/app.css";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import ForecastDetails from "./components/forecast-detail";
import SearchForm from "./components/search-form";
import axios from "axios";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "Manchester",
    country: "England",
  });

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  console.log(selectedForecast);
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    locationSearch(location.city);
  }, [location.city]);

  const locationSearch = (location) => {
    axios
      .get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${location}`)
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      });
  };

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />

      <SearchForm locationSearch={locationSearch} />

      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
