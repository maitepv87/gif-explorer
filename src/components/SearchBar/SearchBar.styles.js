export const styles = {
  searchField: (theme) => ({
    bgcolor:
      theme.palette.mode === "light"
        ? theme.palette.background.paper
        : theme.palette.background.default,
    borderRadius: 2,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
    "&:hover": {
      borderColor: theme.palette.text.secondary,
    },
  }),
};
