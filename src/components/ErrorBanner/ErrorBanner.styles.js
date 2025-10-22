export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  }),
  message: {
    marginBottom: 8,
  },
  button: (theme) => ({
    borderColor: theme.palette.error.contrastText,
    color: theme.palette.error.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  }),
};
