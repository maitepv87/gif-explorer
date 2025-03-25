import React from "react";
import { useState } from "react";
import { GifSearchBar, GifList } from "./components";

export const GifExplorerApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GIF Explorer</h1>

      <GifSearchBar onNewCategory={handleAddCategory} />

      {categories.map((category) => {
        return <GifList key={category} category={category} />;
      })}
    </>
  );
};
