import React from "react";
import PropTypes from "prop-types";
import "../styles/forecast-details.css";
import Moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecastSum">
      <div className="big-date">{Moment(date).format("ddd Do MMM")}</div>

      <div className="temp-max">Max: {temperature.max}&deg;c</div>

      <div className="temp-min">Min: {temperature.min}&deg;c</div>

      <div className="big-humidity">Humidity: {humidity}%</div>

      <div className="wind-speed">
        Wind: {wind.speed}mph {<i className={"wind-speed"} />}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;
