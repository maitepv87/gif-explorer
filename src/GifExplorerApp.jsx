import React from "react";
import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { GifSearchBar, GifList } from "./components";

export const GifExplorerApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h3" align="left" gutterBottom>
          GIF Explorer
        </Typography>

        <GifSearchBar onNewCategory={handleAddCategory} />

        {categories.map((category) => {
          return <GifList key={category} category={category} />;
        })}
      </Container>
    </>
  );
};
