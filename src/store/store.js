import { combineReducers } from "redux";

const location = (state = { value: null }, action) => {
  if (action.type === "SEARCH_INPUT") {
    return { ...state, value: action.value };
  }
  return state;
};

const likeArr = [];

const arrReducer = (state = likeArr, action) => {};

export const reducer = combineReducers({
  location,
});
