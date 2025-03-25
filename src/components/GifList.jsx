import PropTypes from "prop-types";
import { Grid, Typography, CircularProgress } from "@mui/material"; // Importamos Material UI
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks";

export const GifList = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {category}
      </Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <GifItem image={image} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

GifList.propTypes = {
  category: PropTypes.string.isRequired,
};
