import { formatGifData } from "../../utils";
import { ACTION_TYPES } from "../actionTypes";

export const fetchGifs = async (dispatch, searchTerm) => {
  const term = searchTerm.trim();
  if (term.length <= 1) return;

  dispatch({ type: ACTION_TYPES.FETCH_STARTED, payload: true });

  try {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    let URL;

    if (term.toLowerCase() === "trending") {
      URL = `${BASE_URL}/trending?api_key=${API_KEY}&limit=25`;
    } else {
      const sanitized = encodeURIComponent(term.toLowerCase());
      URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${sanitized}&limit=25`;
    }

    const response = await fetch(URL);
    if (!response.ok) throw new Error("Error fetching data");

    const { data } = await response.json();
    const formatted = data.map(formatGifData);

    dispatch({ type: ACTION_TYPES.FETCH_SUCCEEDED, payload: formatted });
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.FETCH_FAILED,
      payload: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
