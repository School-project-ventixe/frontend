import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, placeholder = "Search anything…" }) => {
  return (
    <div className="_magnifyingSearch">
      <input
        type="text"
        className="_searchBar"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
