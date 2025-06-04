import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const GifItem = ({ image }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
      <CardMedia
        component="img"
        alt={image.title || "GIF without description"}
        height="200"
        image={image.url}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ bgcolor: "#f3e5f5", textAlign: "center" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "#6a1b9a" }}
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
