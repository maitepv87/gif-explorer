import { useMemo } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box } from "@mui/material";
import { useFetchGifs } from "../../hooks";
import { GifItem, LoadingSpinner } from "..";

export const GifList = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category,12);

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
        <LoadingSpinner />
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
