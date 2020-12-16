import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import "../styles/forecast-summary.css";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, handleForecastSelect } = props;
  return (
    <h2 className="fcstSumm">
      <div className="forecast-summary_icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__date" data-testid="date-id">
        <span>{moment(date).format("ddd Do MMM")}</span>
      </div>
      <div
        className="forecast-summary__temperature"
        data-testid="temperature-id"
      >
        <span>{temperature}</span>
      </div>
      <div
        className="forecast-summary__description"
        data-testid="description-id"
      >
        <span>{description}</span>
      </div>
      <button onClick={() => handleForecastSelect(date)}>More Details</button>
    </h2>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
