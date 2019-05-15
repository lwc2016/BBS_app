import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.js";

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Router>
					<Route path="/*" component={Layout} ></Route>
				</Router>
			</div>
		)
	}
}