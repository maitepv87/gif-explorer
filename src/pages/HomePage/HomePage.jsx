import { Box } from "@mui/material";
import {
  SearchBar,
  GifGrid,
  LoadingSpinner,
  ErrorHandler,
} from "../../components";
import { useGifContext } from "../../context/useGifContext";
import { fetchGifs } from "../../context/actions";
import { styles } from "./HomePage.styles";

export const HomePage = () => {
  const { state, dispatch } = useGifContext();
  const { searchTerm, gifs, isLoading, error } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchGifs(dispatch, searchTerm);
  };

  return (
    <Box sx={styles.wrapper}>
      <SearchBar onSubmit={handleSubmit} />

      <ErrorHandler error={error} />

      {isLoading ? <LoadingSpinner /> : <GifGrid gifs={gifs} />}
    </Box>
  );
};
