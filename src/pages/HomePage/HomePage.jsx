import { useEffect } from "react";
import { Box } from "@mui/material";
import {
  GifGrid,
  LoadingSpinner,
  ErrorHandler,
  Header,
} from "../../components";
import { useGifContext } from "../../context/useGifContext";
import { loadTrending } from "../../context/actions";
import { styles } from "./HomePage.styles";

export const HomePage = () => {
  const { state, dispatch } = useGifContext();
  const { isLoading, error } = state;

  useEffect(() => {
    loadTrending(dispatch);
  }, [dispatch]);

  return (
    <Box sx={styles.wrapper}>
      <Header />
      <ErrorHandler error={error} />
      {isLoading ? <LoadingSpinner /> : <GifGrid />}
    </Box>
  );
};
