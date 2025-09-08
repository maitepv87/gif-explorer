import { useTheme } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";
import { styles } from "./LoadingSpinner.styles";

export const LoadingSpinner = () => {
  const theme = useTheme();

  return (
    <Box sx={styles.wrapper} role="status" aria-live="polite">
      <CircularProgress
        color="primary"
        size={60}
        sx={{ color: theme.palette.primary.main }}
      />
    </Box>
  );
};
