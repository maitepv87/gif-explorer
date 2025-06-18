export const setSearchTerm = (dispatch, term) => {
  dispatch({ type: "SET_SEARCH_TERM", payload: term });
};
