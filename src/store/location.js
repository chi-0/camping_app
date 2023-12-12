const location = (state = { value: null }, action) => {
  if (action.type === "SEARCH_INPUT") {
    return { ...state, value: action.value };
  }
  return state;
};

export default location;
