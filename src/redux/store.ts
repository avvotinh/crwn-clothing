import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export const dispatch = store.dispatch;
export const getState = store.getState;

export default store;
