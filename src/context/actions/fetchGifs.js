import { formatGifData } from "../../utils";

export const fetchGifs = async (dispatch, searchTerm) => {
  const term = searchTerm.trim();
  if (term.length <= 1) return;

  dispatch({ type: "SET_LOADING", payload: true });

  try {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const sanitized = encodeURIComponent(term.toLowerCase());
    const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${sanitized}&limit=12`;

    const res = await fetch(URL);
    if (!res.ok) throw new Error("Error fetching data");

    const { data } = await res.json();
    const formatted = data.map(formatGifData);

    dispatch({ type: "SET_GIFS", payload: formatted });
    dispatch({ type: "SET_ERROR", payload: null });
  } catch (err) {
    dispatch({
      type: "SET_ERROR",
      payload: err instanceof Error ? err.message : "Unknown error",
    });
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};
