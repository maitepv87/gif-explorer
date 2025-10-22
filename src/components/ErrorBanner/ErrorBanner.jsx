import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styles } from "./ErrorBanner.styles";

export const ErrorBanner = ({ message, onRetry }) => {
  const theme = useTheme();

  return (
    <Box sx={styles.wrapper(theme)}>
      <Typography variant="body2" sx={styles.message}>
        {message || "Something went wrong while loading GIFs."}
      </Typography>
      {onRetry && (
        <Button variant="outlined" onClick={onRetry} sx={styles.button(theme)}>
          Try Again
        </Button>
      )}
    </Box>
  );
};
