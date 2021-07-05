import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./index";

const rootReducer = combineReducers(reducer);

export default function configureStore(initialState) {
  var store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

  return store;
}
