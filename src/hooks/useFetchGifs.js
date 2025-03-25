import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFetch();
  }, [category]);

  const getFetch = async () => {
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const BASE_URL = import.meta.env.VITE_GIPHY_BASE_URL;
    const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${category}&limit=10`;

    setLoading(true);
    setHasError(false);
    setError(null);

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { data } = await response.json();

      const images = data.map((img) => ({
        id: img.id,
        title: img.title || "No title",
        url: img.images?.downsized_medium?.url || "",
      }));

      setImages(images);
    } catch (error) {
      console.error("Error:", error);
      setImages([]);
      setHasError(true);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    images,
    isLoading,
    hasError,
    error,
  };
};
