import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import logger from "redux-logger";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import "./index.css";
import { requestRobots, searchRobots } from "./reducers";

const rootReducer = combineReducers({ searchRobots, requestRobots });

// const enhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
