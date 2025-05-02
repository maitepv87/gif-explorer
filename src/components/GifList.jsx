import { useMemo } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, CircularProgress, Box } from "@mui/material";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks";

export const GifList = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  const memoizedImages = useMemo(() => images, [images]);

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
        <Box
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
          role="status"
          aria-live="assertive"
        >
          <CircularProgress sx={{ color: "#7B1FA2" }} />
        </Box>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          aria-live="polite"
          role="list"
        >
          {memoizedImages.map((image) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={image.id}
              role="listitem"
              tabIndex="0"
            >
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
