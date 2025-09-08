import { ACTION_TYPES } from "../actionTypes";

export const setSearchTerm = (dispatch, term) => {
  dispatch({ type: ACTION_TYPES.SET_SEARCH_TERM, payload: term });
};
