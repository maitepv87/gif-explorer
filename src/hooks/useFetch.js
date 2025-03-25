import { useState, useEffect } from "react";

export const useFetch = (category) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFech();
  }, [category]);

  const getFech = async () => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${category}&limit=10`;

    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { data } = await response.json();

      const images = data.map((img) => {
        return {
          id: img.id,
          title: img.title || "No title",
          url: img.images?.downsized_medium?.url || "",
        };
      });

      setState({
        data: images,
        isLoading: false,
        hasError: false,
        error: null,
      });
    } catch (error) {
      console.error("Error:", error);
      setState({
        data: [],
        isLoading: false,
        hasError: true,
        error: error.message,
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
