import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GifProvider } from "./context/GifContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifProvider>
      <App />
    </GifProvider>
  </React.StrictMode>
);
