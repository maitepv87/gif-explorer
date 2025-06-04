import PropTypes from "prop-types";
import { Grid, Typography, Box } from "@mui/material";
import { useFetchGifs } from "../hooks";
import { LoadingSpinner, GifItem } from "./";

export const GifList = ({ category }) => {
  const { images, isLoading, error } = useFetchGifs(category, 12);

  return (
    <Box sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: "#fce4ec" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#7B1FA2", fontWeight: "bold", textAlign: "center" }}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>

      {error ? (
        <Typography sx={{ color: "red" }}>Error: {error}</Typography>
      ) : images.length === 0 && !isLoading ? (
        <Typography sx={{ color: "gray", textAlign: "center" }}>
          No GIFs found. Try a different search.
        </Typography>
      ) : null}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          aria-live="polite"
          role="list"
        >
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <GifItem image={image} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

GifList.propTypes = {
  category: PropTypes.string.isRequired,
};
