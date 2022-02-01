//npm imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

//reducer imports
import reducer from './reducers/index'

//compent imports
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
