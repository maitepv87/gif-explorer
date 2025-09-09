import { Box } from "@mui/material";
import {
  GifGrid,
  LoadingSpinner,
  ErrorHandler,
  Header,
} from "../../components";
import { useGifContext } from "../../context/useGifContext";
import { styles } from "./HomePage.styles";

export const HomePage = () => {
  const { state } = useGifContext();
  const { isLoading, error } = state;

  return (
    <Box sx={styles.wrapper}>
      <Header />

      <ErrorHandler error={error} />

      {isLoading ? <LoadingSpinner /> : <GifGrid />}
    </Box>
  );
};
