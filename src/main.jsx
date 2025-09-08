import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GifProvider } from "./context/useGifContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <GifProvider>
        <App />
      </GifProvider>
    </ThemeProvider>
  </React.StrictMode>
);
