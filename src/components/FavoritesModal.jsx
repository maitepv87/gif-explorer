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
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Favorites
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {gifs.map((gif) => (
            <Grid item xs={12} sm={6} md={4} key={gif.id}>
              <Card sx={{ borderRadius: 3 }}>
                <CardMedia component="img" height="200" image={gif.url} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
