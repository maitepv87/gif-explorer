import {
  Box,
  TextField,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useGifContext } from "../context/GifContext";

export const SearchBar = ({ onSubmit }) => {
  const { state, dispatch } = useGifContext();
  const { searchTerm } = state;

  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          py: 2,
          px: 2,
          background: "linear-gradient(to right, #f3f0ff, #e9ddff)",
          boxShadow: "0 2px 6px rgba(123, 97, 255, 0.1)",
          borderBottom: "1px solid #d9cfff",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            color="#7b61ff"
          >
            GIF Explorer
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for GIFs..."
            value={searchTerm}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value })
            }
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: 1,
              input: { padding: "12px 14px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search sx={{ color: "#7b61ff" }} />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>
    </form>
  );
};
