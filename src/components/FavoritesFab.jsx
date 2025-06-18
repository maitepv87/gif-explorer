import { Badge, Fab, Tooltip } from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export const FavoritesFab = ({ count, onClick }) => {
  const theme = useTheme();

  return (
    <Tooltip title="Ver favoritos">
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: theme.palette.mode === "light" ? "#ff3b3b" : "#ff6161",
          "&:hover": {
            bgcolor: theme.palette.mode === "light" ? "#e62e2e" : "#d14848",
            transform: "scale(1.1)",
          },
        }}
        aria-label={`Show ${count} favorites`}
        onClick={onClick}
      >
        <Badge badgeContent={count} color="error">
          <FavoriteOutlined />
        </Badge>
      </Fab>
    </Tooltip>
  );
};
