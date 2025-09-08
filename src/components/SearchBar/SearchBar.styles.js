export const styles = {
  wrapper: (theme) => ({
    position: "sticky",
    top: 0,
    zIndex: 1000,
    py: 2,
    px: 2,
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(to right, #ffebc6, #ffd166)"
        : "linear-gradient(to right, #252525, #333)",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 2px 6px rgba(123, 97, 255, 0.1)"
        : "0 2px 8px rgba(255 255 255 / 0.1)",
    borderBottom: "1px solid",
    borderColor: theme.palette.divider,
  }),

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },

  title: (theme) => ({
    fontWeight: 700,
    color:
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  }),

  searchField: (theme) => ({
    bgcolor:
      theme.palette.mode === "light"
        ? "#fff"
        : theme.palette.background.default,
    borderRadius: 2,
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 4px 10px rgba(123, 97, 255, 0.15)"
        : "0px 4px 10px rgba(255, 255, 255, 0.1)",
    "&:hover": {
      boxShadow: "0px 6px 12px rgba(123, 97, 255, 0.2)",
    },
  }),
};
