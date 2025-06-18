import { useTheme } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  Card,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const FavoritesModal = ({ open, onClose, gifs }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 4,
          bgcolor: theme.palette.background.paper,
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 8px 16px rgba(0, 0, 0, 0.15)"
              : "0px 8px 16px rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
        Favorites
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.text.secondary,
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          {gifs.map((gif) => (
            <Grid item xs={12} sm={6} md={4} key={gif.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow:
                    theme.palette.mode === "light"
                      ? "0 2px 8px rgba(0,0,0,0.1)"
                      : "0 2px 8px rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia component="img" height="200" image={gif.url} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
