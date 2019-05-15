import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container">
					<Link to="/" className="navbar-brand">BBS</Link>
				  	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				  	</button>

				  	<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
					  		<li className="nav-item active">
								<Link to="/" className="nav-link">首页</Link>
					  		</li>
						</ul>
						<ul className="navbar-nav my-2 my-lg-0">
					  		<li className="nav-item active">
						  		<Link to="/login" className="nav-link">登录</Link>
					  		</li>
					  		<li className="nav-item active">
						  		<Link to="/register" className="nav-link">注册</Link>
					  		</li>
						</ul>
				  	</div>
				</div>
			</nav>
		)
	}
}