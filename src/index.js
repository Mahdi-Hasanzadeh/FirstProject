import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

var element = <h3> Hello world </h3>; //JSX(javascript XML) expression
console.log(element);
var div = document.getElementById("root");
ReactDOM.render(element, div);
