import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { basicReduxStore } from "./store";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={basicReduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
