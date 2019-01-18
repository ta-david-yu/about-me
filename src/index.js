import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./modules/Main";

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Main />
    </BrowserRouter>,
    document.getElementById("root")
)