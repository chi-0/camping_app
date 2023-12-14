import { combineReducers } from "redux";

const location = (state = { value: null }, action) => {
  if (action.type === "SEARCH_INPUT") {
    return { ...state, value: action.value };
  }
  return state;
};

const likeArr = [];
const unLikeArr = [];

const arrReducer = (state = [likeArr, unLikeArr], action) => {
  if (action.type === "LIKE") {
    state[0].push(action);

    return state;
  } else if (action.type === "UNLIKE") {
    state[1].push(action);

    return state;
  } else if (action.type === "REMOVE_LIKE") {
    state[0] = state[0].filter((el) => el.title !== action.title);

    return state;
  } else if (action.type === "REMOVE_UNLIKE") {
    state[1] = state[1].filter((el) => el.title !== action.title);
  }
  return state;
};

export const reducer = combineReducers({
  location,
  arrReducer,
});
