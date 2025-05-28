import { useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { GifSearchBar, GifList } from "../components";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
      }}
    >
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "white", borderRadius: 3, padding: 4 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#7B1FA2", fontWeight: "bold" }}
        >
          GIF Explorer
        </Typography>

        <Paper
          elevation={3}
          sx={{ padding: 2, borderRadius: 2, marginBottom: 3 }}
        >
          <GifSearchBar onNewCategory={handleAddCategory} />
        </Paper>

        {/* Render multiple GifList for each category */}
        {categories.map((category) => (
          <GifList key={category} category={category} />
        ))}
      </Container>
    </Box>
  );
};
