import React from "react";
import ForecastSummary from "./forecast-summary";
import PropTypes from "prop-types";
import "../styles/forecast-summaries.css";

const ForecastSummaries = ({ forecasts, handleForecastSelect }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        handleForecastSelect={handleForecastSelect}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
