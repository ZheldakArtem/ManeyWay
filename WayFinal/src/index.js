import * as React from "react";
import * as ReactDOM from "react-dom";
import { MDCRipple } from '@material/ripple/index';
var ripple = new MDCRipple(document.querySelector('.foo-button'));
ReactDOM.render(React.createElement("div", null,
    React.createElement("h1", null, "Hello, Money way!!!")), document.getElementById("root"));
