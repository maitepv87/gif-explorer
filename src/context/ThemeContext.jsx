import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#ff7b72" : "#ff5a5a",
          },
          secondary: {
            main: mode === "light" ? "#5a67d8" : "#809bff",
          },
          background: {
            default: mode === "light" ? "#fffaf0" : "#121212",
            paper: mode === "light" ? "#fffbec" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#333" : "#fff",
            secondary: mode === "light" ? "#ff5a5a" : "#ff8686",
          },
        },
        transitions: {
          duration: { standard: 300 },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
