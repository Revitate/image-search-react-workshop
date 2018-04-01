import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Search from "./features/search/Search";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import searchReducer from "./features/search/redux";
import promiseMiddleware from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  searchReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
