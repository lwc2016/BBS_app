import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const render = (Component)=>{
	ReactDOM.render(<Component />, document.getElementById("root"));
}

render(App);

if(module.hot){
	console.log("---ok---11");
}