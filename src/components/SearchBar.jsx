import { useTheme } from "@mui/material/styles";
import {
  Box,
  TextField,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useGifContext } from "../context/useGifContext";
import { setSearchTerm } from "../context/actions";
import { ThemeToggle } from "./";

export const SearchBar = ({ onSubmit }) => {
  const { state, dispatch } = useGifContext();
  const { searchTerm } = state;
  const theme = useTheme();

  const handleSearchTermChange = (event) => {
    setSearchTerm(dispatch, event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
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
        }}
      >
        <Container maxWidth="md">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              color={
                theme.palette.mode === "light"
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main
              }
            >
              GIF Explorer
            </Typography>

            <ThemeToggle />
          </Box>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for GIFs..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            sx={{
              bgcolor:
                theme.palette.mode === "light"
                  ? "#fff"
                  : theme.palette.background.default,
              borderRadius: 2,
              boxShadow:
                theme.palette.mode === "light"
                  ? "0px 4px 10px rgba(123, 97, 255, 0.15)"
                  : "0px 4px 10px rgba(255, 255, 255, 0.1)",
              "&:hover": { boxShadow: "0px 6px 12px rgba(123, 97, 255, 0.2)" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search color={theme.palette.text.primary} />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>
    </form>
  );
};
