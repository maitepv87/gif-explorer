export const formatGifData = (gif) => ({
  id: gif.id,
  title: gif.title?.trim() || "Untitled GIF",
  url: gif.images?.downsized_medium?.url || "",
  giphyUrl: gif.url,
});
