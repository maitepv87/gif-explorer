import { useTheme } from "@mui/material/styles";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { ThemeToggle } from "..";
import { SearchBar } from "../SearchBar/SearchBar";
import { styles } from "./Header.styles";
import githubLogoWhite from "../../assets/githubWhite.png";
import githubLogo from "../../assets/github.png";

export const Header = () => {
  const theme = useTheme();

  return (
    <Box sx={styles.wrapper(theme)}>
      <Container maxWidth="lg">
        <Box sx={styles.headerRow}>
          <Typography variant="h4" sx={styles.title(theme)}>
            GIF Explorer
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeToggle />
            <IconButton
              component="a"
              href="https://github.com/maitepv87/gif-explorer"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.githubButton}
            >
              <img
                src={
                  theme.palette.mode === "dark" ? githubLogoWhite : githubLogo
                }
                alt="GitHub repository"
              />
            </IconButton>
          </Box>
        </Box>

        {/* Search */}
        <SearchBar />
      </Container>
    </Box>
  );
};
