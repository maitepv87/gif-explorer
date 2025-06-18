import { useState } from "react";
import { Box } from "@mui/material";
import {
  SearchBar,
  GifGrid,
  FavoritesFab,
  LoadingSpinner,
  ErrorHandler,
  FavoritesModal,
} from "../components";
import { useGifContext } from "../context/GifContext";
import { fetchGifs, toggleFavorite } from "../context/actions";

export const HomePage = () => {
  const { state, dispatch } = useGifContext();
  const { searchTerm, gifs, isLoading, error, favorites } = state;

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchGifs(dispatch, searchTerm);
  };

  const handleToggleFavorite = (id) => {
    toggleFavorite(dispatch, id);
  };

  const favoriteGifs = gifs.filter((gif) => favorites.includes(gif.id));

  const handleOpenFavorites = () => setModalOpen(true);

  const handleCloseFavorites = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
    >
      <SearchBar onSubmit={handleSubmit} />

      <ErrorHandler error={error} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <GifGrid
          gifs={gifs}
          favorites={favorites}
          toggleFavorite={handleToggleFavorite}
        />
      )}

      <FavoritesFab count={favorites.length} onClick={handleOpenFavorites} />

      <FavoritesModal
        open={modalOpen}
        onClose={handleCloseFavorites}
        gifs={favoriteGifs}
      />
    </Box>
  );
};
