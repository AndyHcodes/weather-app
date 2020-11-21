import axios from "axios";

export const getForecasts = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchQuery
) => {
  let endpoint = `https://mcr-codes-weather.herokuapp.com/forecast`;

  axios.get(endpoint).then((response) => {
    return (
      setSelectedDate(response.data.forecasts[0].date),
      setForecasts(response.data.forecasts),
      setLocation(response.data.location)
    );
  });
};

export default getForecasts;
