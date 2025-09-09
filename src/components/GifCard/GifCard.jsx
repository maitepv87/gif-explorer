import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { styles } from "./GifCard.styles";

export const GifCard = ({ url, title, giphyUrl }) => {
  const theme = useTheme();

  return (
    <Card elevation={1} sx={styles.card(theme)}>
      <CardMedia
        component="img"
        image={url}
        alt={title || "GIF"}
        sx={styles.media}
        loading="lazy"
      />
      <Box sx={styles.overlay}>
        {title && (
          <Typography variant="body2" sx={{ flex: 1 }}>
            {title}
          </Typography>
        )}
        {giphyUrl && (
          <Tooltip title="View on Giphy">
            <IconButton
              size="small"
              component="a"
              href={giphyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <OpenInNew fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Card>
  );
};
