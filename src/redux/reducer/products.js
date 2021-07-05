import Types from "../constant/constants";

var defaultState = {
  products: [],
};

var Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.ADD_PRODUCTS: {
      let newState = Object.assign({}, state);
      newState.products = [...newState.products, action.payload];
      return newState;
    }
    case Types.REMOVE_PRODUCTS: {
      let newState = Object.assign({}, state);
      newState.products = state.products.filter((item) => item.id !== action.payload);
      return newState;
    }
    case Types.EDIT_PRODUCTS: {
      let newState = Object.assign({}, state);
      newState.products = newState.products.map((item) =>
        item.id == action.payload.id
          ? {
              ...item,
              id: action.payload.id,
              p_name: action.payload.c_name,
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
