import { useState, useEffect } from "react";
import { getFetch } from "../api/GifApi";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleFetchData();
  }, [category]);

  const handleFetchData = async () => {
    setLoading(true);
    setHasError(false);
    setError(null);

    try {
      const images = await getFetch(category);
      setImages(images);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      setHasError(true);
      setError(error.message);
      setImages([]);
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
