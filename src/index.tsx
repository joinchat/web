import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./assets/scss/styles.scss";
import App from "./views/app";

import { createStore } from "redux";
import { Provider } from "react-redux";
import configureStore  from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);
