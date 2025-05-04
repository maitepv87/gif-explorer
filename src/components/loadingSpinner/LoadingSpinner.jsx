import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      role="status"
      aria-live="assertive"
    >
      <CircularProgress sx={{ color: "#7B1FA2" }} />
    </Box>
  );
};
