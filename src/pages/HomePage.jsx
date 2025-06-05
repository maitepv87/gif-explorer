import { Box } from "@mui/material";
import {
  SearchBar,
  GifGrid,
  FavoritesFab,
  LoadingSpinner,
  ErrorHandler,
} from "../components";
import { useGifContext } from "../context/GifContext";
import { fetchGifs } from "../context/actions";

export const HomePage = () => {
  const { state, dispatch } = useGifContext();
  const { searchTerm, gifs, isLoading, error, favorites } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchGifs(dispatch, searchTerm);
  };

  const toggleFavorite = (id) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });
  };

  return (
    <Box sx={{ bgcolor: "#f3f0ff", minHeight: "100vh" }}>
      <SearchBar onSubmit={handleSubmit} />

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
