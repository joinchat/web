import * as React from "react";
import * as ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./assets/scss/styles.scss";


import { App } from "./views/app/app";


ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>,
    document.getElementById("root")
);
