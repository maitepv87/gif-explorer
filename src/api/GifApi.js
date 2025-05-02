export const getFetch = async (category) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `${BASE_URL}/search?api_key=${API_KEY}&q=${category}&limit=10`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `Server error: ${response.status}. Please try again later.`
      );
    }

    const { data } = await response.json();

    return data.map((img) => ({
      id: img.id,
      title: img.title || "No title",
      url: img.images?.downsized_medium?.url || "",
    }));
  } catch (error) {
    console.error(`API Fetch Error: ${error.message}`, error);
    throw new Error(`API Fetch failed: ${error.message}`);
  }
};
