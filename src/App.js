import React, { useState } from "react";
import "./App.css";
import LocationDetails from "./components/location-details";
import PropTypes from "prop-types";
import ForecastSummaries from "./components/forecast-summaries";
import ForecastDetails from "./components/forecast-detail";
import "./styles/app.css";

const App = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);
  const selectedForecast = props.forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  console.log(selectedForecast);
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="forecast">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />

      <ForecastSummaries
        forecasts={props.forecasts}
        handleForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
