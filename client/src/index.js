import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { basicReduxStore } from "./store";
import "./index.css";
import App from "./App";
import { runWithAdal } from "react-adal";
import { authContext } from "./adalConfig";
import * as serviceWorker from "./serviceWorker";

const DO_NOT_LOGIN = false;

runWithAdal(
  authContext,
  () => {
    //console.log("authContext @@@ " + JSON.stringify(authContext._user));
    //require("./indexApp.js");

    ReactDOM.render(
      <Provider store={basicReduxStore}>
        <App _user={authContext._user} />
      </Provider>,
      document.getElementById("root")
    );
  },
  DO_NOT_LOGIN
);
serviceWorker.unregister();
