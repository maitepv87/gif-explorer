import { useEffect } from "react";
import { Box } from "@mui/material";
import { GifList, LoadingSpinner, ErrorBanner, Header } from "../../components";
import { useGifContext } from "../../context/useGifContext";
import { loadTrending } from "../../context/actions";
import { styles } from "./HomePage.styles";

export const HomePage = () => {
  const { state, dispatch } = useGifContext();
  const { isLoading, error } = state;

  useEffect(() => {
    loadTrending(dispatch);
  }, [dispatch]);

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <ErrorBanner message={error} onRetry={() => loadTrending(dispatch)} />
    );

  return (
    <Box sx={styles.wrapper}>
      <Header />
      <GifList />
    </Box>
  );
};
