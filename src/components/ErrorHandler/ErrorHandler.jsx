import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { styles } from "./ErrorHandler.styles";

export const ErrorHandler = ({ error }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(!!error);

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  const errorMessage = useMemo(() => error, [error]);

  const handleClose = () => setOpen(false);

  if (!error) return null;

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="error" sx={styles.alert(theme)}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};
