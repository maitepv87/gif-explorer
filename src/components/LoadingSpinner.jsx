import { useTheme } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        transition: "opacity 0.5s ease-in-out",
      }}
      role="status"
      aria-live="polite"
    >
      <CircularProgress sx={{ color: theme.palette.primary.main, size: 60 }} />
    </Box>
  );
};
