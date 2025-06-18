import { Container, Grid } from "@mui/material";
import { GifCard } from "./";

export const GifGrid = ({ gifs, favorites, toggleFavorite }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, pb: 10 }}>
      <Grid container spacing={2}>
        {gifs.map((gif) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={gif.id}>
              <GifCard
                id={gif.id}
                url={gif.url}
                isFavorite={favorites.includes(gif.id)}
                onToggle={toggleFavorite}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
