import { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

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
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search GIFs from Giphy"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

GifSearchBar.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
