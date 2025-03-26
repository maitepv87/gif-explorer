import React, { useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { GifSearchBar, GifList } from "./components";

export const GifExplorerApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          padding: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#7B1FA2", fontWeight: "bold" }}
        >
          GIF Explorer
        </Typography>

        {/* Search */}
        <Paper
          elevation={3}
          sx={{ padding: 2, borderRadius: 2, marginBottom: 3 }}
        >
          <GifSearchBar onNewCategory={handleAddCategory} />
        </Paper>

        {/* Categories */}
        {categories.map((category) => (
          <GifList key={category} category={category} />
        ))}
      </Container>
    </Box>
  );
};
