export const styles = {
  container: {
    mt: 5,
    pb: 10,
  },
  grid: {
    columnCount: 4,
    columnGap: "1rem",
    "@media (max-width: 1200px)": {
      columnCount: 3,
    },
    "@media (max-width: 900px)": {
      columnCount: 2,
    },
    "@media (max-width: 600px)": {
      columnCount: 1,
    },
  },
  item: {
    breakInside: "avoid",
    marginBottom: "1rem",
  },
};
