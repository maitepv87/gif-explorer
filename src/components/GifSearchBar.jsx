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
    <form onSubmit={handleSubmit} role="search" aria-live="polite">
      <TextField
        label="Search GIFs from Giphy"
        aria-label="Enter a keyword to search for GIFs"
        aria-live="polite"
        role="searchbox"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        tabIndex="0"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "#fff",
            "& fieldset": { borderColor: "#7B1FA2" },
            "&:hover fieldset": { borderColor: "#ff9a9e" },
            "&.Mui-focused fieldset": { borderColor: "#7B1FA2" },
          },
          "& .MuiInputLabel-root": { color: "#7B1FA2" },
          "& .MuiInputLabel-root.Mui-focused": { color: "#7B1FA2" },
        }}
      />
    </form>
  );
};

GifSearchBar.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
