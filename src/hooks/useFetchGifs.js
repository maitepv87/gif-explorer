import { useState, useEffect } from "react";
import { getGift } from "../helpers";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImages = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const newImages = await getGift(category);

      setImages(newImages);
    } catch (err) {
      console.error("Error fetching GIFs:", err);
      setError("Failed to fetch GIFs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return {
    images,
    isLoading,
    error,
  };
};
