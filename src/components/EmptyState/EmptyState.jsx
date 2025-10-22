import { Box, Typography, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { useTheme } from "@mui/material/styles";
import { styles } from "./EmptyState.styles";

export const EmptyState = ({ title, message, onRetry }) => {
  const theme = useTheme();

  return (
    <Box sx={styles.wrapper(theme)}>
      <SentimentDissatisfiedIcon sx={styles.icon(theme)} />
      <Typography variant="h6" gutterBottom sx={styles.title}>
        {title || "No results found"}
      </Typography>
      <Typography variant="body2" sx={styles.message}>
        {message || "Try searching for something joyful, silly, or surprising."}
      </Typography>
      {onRetry && (
        <Button variant="outlined" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </Box>
  );
};
