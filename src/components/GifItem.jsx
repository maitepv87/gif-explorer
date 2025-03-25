import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const GifItem = ({ image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={image.title || "GIF"}
        height="200"
        image={image.url}
      />
      <CardContent>
        <Typography variant="caption" component="div">
          {image.title || "No title available"}
        </Typography>
      </CardContent>
    </Card>
  );
};

GifItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
