import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { LoadingSpinner } from "./components";
import { HomePage } from "./pages";
import { fetchGifs } from "./context/actions";
import { useGifContext } from "./context/useGifContext";

export const App = () => {
  const { dispatch } = useGifContext();
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    fetchGifs(dispatch, "trending")
      .then(() => setIsPreloading(false))
      .catch(() => setIsPreloading(false));
  }, [dispatch]);

  return <Box>{isPreloading ? <LoadingSpinner /> : <HomePage />}</Box>;
};
