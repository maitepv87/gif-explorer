export const styles = {
  card: (theme) => ({
    position: "relative",
    borderRadius: 3,
    overflow: "hidden",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 2px 8px rgba(0,0,0,0.05)"
        : "0 2px 8px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
    },
    animation: "fadeIn 0.4s ease forwards",
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(10px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  }),
  media: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    padding: "0.5rem",
    fontSize: "0.875rem",
    opacity: 0,
    transition: "opacity 0.3s ease",
    ".MuiCard-root:hover &": {
      opacity: 1,
    },
  },
};
