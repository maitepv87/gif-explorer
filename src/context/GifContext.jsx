import { createContext, useReducer, useContext } from "react";

const GifContext = createContext();

const initialState = {
  searchTerm: "",
  gifs: [],
  isLoading: false,
  error: null,
  favorites: [],
};

function gifReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_GIFS":
      return { ...state, gifs: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "TOGGLE_FAVORITE":
      const id = action.payload;
      const isFav = state.favorites.includes(id);
      return {
        ...state,
        favorites: isFav
          ? state.favorites.filter((fid) => fid !== id)
          : [...state.favorites, id],
      };
    default:
      return state;
  }
}

export const GifProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gifReducer, initialState);

  return (
    <GifContext.Provider value={{ state, dispatch }}>
      {children}
    </GifContext.Provider>
  );
};

export const useGifContext = () => useContext(GifContext);
