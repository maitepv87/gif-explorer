import { Badge, Fab, Tooltip } from "@mui/material";
import { FavoriteOutlined } from "@mui/icons-material";

export const FavoritesFab = ({ count }) => {
  return (
    <Tooltip title="Ver favoritos">
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "#7b61ff",
          "&:hover": { bgcolor: "#6b52e1" },
        }}
      >
        <Badge badgeContent={count} color="error">
          <FavoriteOutlined />
        </Badge>
      </Fab>
    </Tooltip>
  );
};
