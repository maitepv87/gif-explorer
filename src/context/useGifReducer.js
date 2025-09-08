import { useReducer } from "react";
import { ACTION_TYPES } from "./actionTypes";

// Initial state for async operations: loading, error, and data",
const initialState = {
  searchTerm: "",
  gifs: [],
  isLoading: false,
  error: null,
};

// Reducer to handle async lifecycle: start, success, error, reset",
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case ACTION_TYPES.FETCH_STARTED:
      return { ...state, isLoading: true, error: null };

    case ACTION_TYPES.FETCH_SUCCEEDED:
      return { ...state, isLoading: false, gifs: action.payload };

    case ACTION_TYPES.FETCH_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

// Custom hook to manage async state transitions",
export const useGifReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
