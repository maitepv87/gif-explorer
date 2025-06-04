import { Box } from "@mui/material";
import { useState } from "react";
import { SearchBar, GifGrid, FavoritesFab } from "../components";

const sampleGifs = [
  {
    id: "1",
    url: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
  },
  { id: "2", url: "https://media.giphy.com/media/l3vR4GeiXNa3E9L1W/giphy.gif" },
  { id: "3", url: "https://media.giphy.com/media/l3vR4GeiXNa3E9L1W/giphy.gif" },
  {
    id: "4",
    url: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
  },
];

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ bgcolor: "#f3f0ff", minHeight: "100vh" }}>
      <SearchBar search={search} setSearch={setSearch} />

      <GifGrid
        gifs={sampleGifs}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <FavoritesFab count={favorites.length} />
    </Box>
  );
};

// import { useState } from "react";
// import { Container, Typography, Paper, Box } from "@mui/material";
// import { GifSearchBar, GifList } from "../components";

// export const HomePage = () => {
//   const [categories, setCategories] = useState([]);

//   const handleAddCategory = (newCategory) => {
//     if (categories.includes(newCategory)) return;
//     setCategories([newCategory]);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 4,
//         background: "linear-gradient(to right, #ede7f6, #f3e5f5)",
//       }}
//     >
//       <Container
//         maxWidth="md"
//         sx={{
//           backgroundColor: "#fff",
//           borderRadius: 4,
//           padding: 4,
//           boxShadow: 3,
//         }}
//       >
//         <Typography
//           variant="h3"
//           align="center"
//           gutterBottom
//           sx={{ color: "#6a1b9a", fontWeight: 600 }}
//         >
//           GIF Explorer
//         </Typography>

//         <Paper
//           elevation={3}
//           sx={{ padding: 2, borderRadius: 2, marginBottom: 3 }}
//         >
//           <GifSearchBar onNewCategory={handleAddCategory} />
//         </Paper>

//         {/* Render multiple GifList for each category */}
//         {categories.map((category) => (
//           <GifList key={category} category={category} />
//         ))}
//       </Container>
//     </Box>
//   );
// };
