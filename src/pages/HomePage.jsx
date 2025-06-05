import { Box } from "@mui/material";
import { useState } from "react";
import {
  SearchBar,
  GifGrid,
  FavoritesFab,
  LoadingSpinner,
  ErrorHandler,
} from "../components";
import { useFetchGifs } from "../hooks";

export const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const { gifs, isLoading, error } = useFetchGifs(searchTerm, 12);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed.length <= 1) return;
    setSearchTerm(trimmed);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ bgcolor: "#f3f0ff", minHeight: "100vh" }}>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={handleSubmit}
      />

      <ErrorHandler error={error} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <GifGrid
          gifs={gifs}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}

      <FavoritesFab count={favorites.length} />
    </Box>
  );
};
