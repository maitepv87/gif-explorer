import { Container, Box } from "@mui/material";
import { GifCard } from "../";
import { styles } from "./GifGrid.styles";
import { useGifContext } from "../../context/useGifContext";

export const GifGrid = () => {
  const { state } = useGifContext();
  const { gifs } = state;

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Box sx={styles.grid}>
        {gifs.map((gif) => (
          <Box key={gif.id} sx={styles.item}>
            <GifCard url={gif.url} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};
