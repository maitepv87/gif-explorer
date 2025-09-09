import { useTheme } from "@mui/material/styles";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useGifContext } from "../../context/useGifContext";
import { setSearchTerm, fetchGifs } from "../../context/actions";
import { styles } from "./SearchBar.styles";

export const SearchBar = () => {
  const { state, dispatch } = useGifContext();
  const { searchTerm } = state;
  const theme = useTheme();

  const handleChange = (event) => {
    setSearchTerm(dispatch, event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchGifs(dispatch, searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for GIFs..."
        value={searchTerm}
        onChange={handleChange}
        sx={styles.searchField(theme)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color={theme.palette.text.primary} />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
