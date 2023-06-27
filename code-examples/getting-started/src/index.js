import React from "react";
import { ReactDOM } from "react-dom";

let element = React.createElement('h1', {}, 'Welcome to React! This is the First Program' )
ReactDOM.render(element, document.getElementById('app'));