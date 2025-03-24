export const getGift = async (category) => {
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
  const BASE_URL = import.meta.env.VITE_GIPHY_BASE_URL;
  
  const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${category}&limit=10`;

  try {
    const response = await fetch(URL);
    const { data } = await response.json();

    const images = data.map((img) => {
      return {
        id: img.id,
        title: img.title || "No title",
        url: img.images?.downsized_medium?.url || "",
      };
    });

    return images;
  } catch (error) {
    console.error("Error in getGift:", error);
    return [];
  }
};
