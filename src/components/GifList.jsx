import PropTypes from "prop-types";
import { Grid, Typography, CircularProgress, Box } from "@mui/material";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks";

export const GifList = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <Box sx={{ mt: 4, p: 3, borderRadius: 2, bgcolor: "#fce4ec" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#7B1FA2", fontWeight: "bold", textAlign: "center" }}
      >
        {category}
      </Typography>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress sx={{ color: "#7B1FA2" }} />
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
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
