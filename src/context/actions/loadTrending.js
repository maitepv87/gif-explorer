import { searchGifs } from "./searchGifs";

export const loadTrending = async (dispatch) => {
  await searchGifs(dispatch, "trending");
};
