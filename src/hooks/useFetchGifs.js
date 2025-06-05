import { useState, useEffect } from "react";
import { formatGifData } from "../utils";

export const useFetchGifs = (searchTerm, limit = 12) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
        const sanitizedSearchTerm = encodeURIComponent(
          searchTerm.trim().toLowerCase()
        );
        const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${sanitizedSearchTerm}&limit=${limit}`;

        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const { data } = await response.json();

        const formattedGifs = data.map(formatGifData);
        setGifs(formattedGifs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { gifs, isLoading, error };
};
