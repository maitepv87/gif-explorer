import { useState, useEffect } from "react";
import { formatGifData } from "../utils";

export const useFetchGifs = (category, limit = 12) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${category}&limit=${limit}`;

        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const { data } = await response.json();

        const formattedImages = data.map(formatGifData);

        setImages(formattedImages);
      } catch (err) {
        setHasError(true);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { images, isLoading, hasError, error };
};
