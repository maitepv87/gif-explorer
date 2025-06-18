export const toggleFavorite = (dispatch, id) => {
  dispatch({ type: "TOGGLE_FAVORITE", payload: id });
};
