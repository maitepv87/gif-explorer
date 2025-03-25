import { useState } from "react";
import PropTypes from "prop-types";

export const GifSearchBar = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

GifSearchBar.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
