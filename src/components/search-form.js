import { useState } from "react";

const SearchForm = ({ locationSearch }) => {
  const [searchText, setSearchText] = useState({ search: "" });

  const handleInputChange = (event) => {
    setSearchText({ ...searchText, [event.target.name]: event.target.value });
  };

  console.log(searchText);

  const handleSubmit = (e) => {
    e.preventDefault();
    locationSearch(searchText.search);
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit} action="submit">
        <input
          name="search"
          value={searchText.search}
          type="text"
          className="searchCity"
          placeholder="Search city"
          onChange={handleInputChange}
        />
        <br />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
