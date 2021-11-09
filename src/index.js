import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { mySaga } from "./sagas/saga";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

