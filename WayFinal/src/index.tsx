import * as React from "react";
import * as ReactDOM from "react-dom";
import {MDCRipple} from '@material/ripple/index';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

ReactDOM.render(
    <div>
        <h1>Hello, Money way!!!</h1>
    </div>,
    document.getElementById("root")
);