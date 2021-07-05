import Types from "../constant/constants";

var defaultState = {
  categories: [],
};

var Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.ADD_CATEGORIES: {
      let newState = Object.assign({}, state);
      newState.categories = [...newState.categories, action.payload];
      return newState;
    }
    case Types.REMOVE_CATEGORIES: {
      let newState = Object.assign({}, state);
      newState.categories = newState.categories.filter((item) => item.id !== action.payload);
      return newState;
    }
    case Types.EDIT_CATEGORIES: {
      let newState = Object.assign({}, state);
      newState.categories = newState.categories.map((item) =>
        item.id == action.payload.id
          ? {
              ...item,
              id: action.payload.id,
              c_name: action.payload.c_name,
              type: action.payload.type,
              description: action.payload.description,
            }
          : item
      );
      return newState;
    }

    default:
      return state;
  }
};

export default Reducer;
