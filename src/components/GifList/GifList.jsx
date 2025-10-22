import { Container, Box } from "@mui/material";
import { EmptyState, GifCard } from "..";
import { styles } from "./GifList.styles";
import { useGifContext } from "../../context/useGifContext";

export const GifList = () => {
  const { state } = useGifContext();
  const { gifs } = state;

  if (gifs.length === 0 && state.searchTerm.trim().length > 1) {
    return (
      <EmptyState
        title="No GIFs found"
        message={`No results for "${state.searchTerm}". Try something joyful or silly.`}
      />
    );
  }

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Box sx={styles.grid}>
        {gifs.map((gif) => (
          <Box key={gif.id} sx={styles.item}>
            <GifCard url={gif.url} title={gif.title} giphyUrl={gif.giphyUrl} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};
