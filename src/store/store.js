import { combineReducers } from "redux";

const modalReducer = (state = false, action) => {
  if (action.type === "OPEN") {
    state = true;
    return state;
  } else if (action.type === "CLOSE") {
    state = false;
    return state;
  }
  return state;
};

const location = (state = { value: null }, action) => {
  if (action.type === "SEARCH_INPUT") {
    return { ...state, value: action.value };
  }
  return state;
};

const arrReducer = (state = [[], []], action) => {
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

const coordReducer = (state = { isLat: null, isLon: null }, action) => {
  if (action.type === "CHECK") {
    const coord = {
      ...state,
      isLat: action.isLat,
      isLon: action.isLon,
    };

    return coord;
  } else {
    return state;
  }
};

const searchValidReducer = (state = { value: null }, action) => {
  if (action.type === "SEARCH_VALID") {
    return { ...state, value: action.value };
  }
  return state;
};

export const reducer = combineReducers({
  modalReducer,
  location,
  arrReducer,
  coordReducer,
  searchValidReducer,
});
