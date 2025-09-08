import { useTheme } from "@mui/material/styles";
import {
  Box,
  TextField,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useGifContext } from "../../context/useGifContext";
import { setSearchTerm } from "../../context/actions";
import { ThemeToggle } from "..";
import { styles } from "./SearchBar.styles";

export const SearchBar = ({ onSubmit }) => {
  const { state, dispatch } = useGifContext();
  const { searchTerm } = state;
  const theme = useTheme();

  const handleSearchTermChange = (event) => {
    setSearchTerm(dispatch, event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={styles.wrapper(theme)}>
        <Container maxWidth="md">
          <Box sx={styles.headerRow}>
            <Typography variant="h4" sx={styles.title(theme)}>
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
            sx={styles.searchField(theme)}
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
