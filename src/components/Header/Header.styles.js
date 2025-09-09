export const styles = {
  wrapper: (theme) => ({
    position: "sticky",
    top: 0,
    zIndex: 1000,
    py: 2,
    px: 2,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
  }),

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },

  title: (theme) => ({
    fontWeight: 700,
    color: theme.palette.text.primary,
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      opacity: 0.8,
    },
  }),

  githubButton: {
    p: 0,
    "& img": {
      width: 28,
      height: 28,
      display: "block",
    },
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.2s ease",
    },
  },
};
