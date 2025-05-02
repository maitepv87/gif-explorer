import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const GifItem = ({ image }) => {
  return (
    <Card
      aria-label={`GIF representing ${image.title || "an animated image"}`}
      sx={{
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        alt={image.title ? image.title : "GIF without description"}
        height="200"
        image={image.url}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ bgcolor: "#f8bbd0", textAlign: "center" }}>
        <Typography
          variant="caption"
          sx={{ fontWeight: "bold", color: "#7B1FA2" }}
          aria-live="polite"
        >
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
