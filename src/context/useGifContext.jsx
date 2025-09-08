import { createContext, useContext } from "react";
import { useGifReducer } from "./useGifReducer";

// Create the context
export const GifContext = createContext();

// Provider that wraps the app
export const GifProvider = ({ children }) => {
  const { state, dispatch } = useGifReducer();
  return (
    <GifContext.Provider value={{ state, dispatch }}>
      {children}
    </GifContext.Provider>
  );
};

// Hook to consume the context
export const useGifContext = () => {
  const context = useContext(GifContext);
  if (!context) {
    throw new Error("useGifContext should I use within a Gif Provider");
  }
  return context;
};
