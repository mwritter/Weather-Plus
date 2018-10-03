import React from "react";
import ReactDOM from "react-dom";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/app";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
