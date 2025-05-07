import PropTypes from "prop-types";
import { Grid, Typography, Box } from "@mui/material";
import { useFetchGifs } from "../../hooks";
import { LoadingSpinner } from "../../../components";
import { GifItem } from "../";

export const GifGrid = ({ category }) => {
  const { images, isLoading, hasError, error } = useFetchGifs(category, 12);

  return (
    <Box sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: "#fce4ec" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#7B1FA2", fontWeight: "bold", textAlign: "center" }}
      >
        {category}
      </Typography>

      {hasError ? (
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
