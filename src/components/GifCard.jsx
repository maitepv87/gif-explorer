import { useTheme } from "@mui/material/styles";
import { Card, CardMedia, CardActions, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const GifCard = ({ id, url, isFavorite, onToggle }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow:
          theme.palette.mode === "light"
            ? "0 2px 8px rgba(0,0,0,0.05)"
            : "0 2px 8px rgba(255 255 255 / 0.1)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={url}
        alt="gif"
        sx={{ objectFit: "cover" }}
      />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton
          onClick={() => onToggle(id)}
          sx={{
            color: isFavorite
              ? theme.palette.mode === "light"
                ? "#ff6f91"
                : "#ff8aa2"
              : theme.palette.text.disabled,
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
};
