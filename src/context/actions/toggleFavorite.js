import { ACTION_TYPES } from "../actionTypes";

export const toggleFavorite = (dispatch, id) => {
  dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITE, payload: id });
};
