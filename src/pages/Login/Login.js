import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="login jumbotron">
				<h4 className="title">登录</h4>
				<form>
					<div className="form-group">
						<input type="text" className="form-control" id="username" placeholder="用户名" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" placeholder="密码" />
					</div>
					<div className="form-group clearfix">
						<button className="btn btn-primary float-right">登录</button>
					</div>
				</form>
			</div>
		)
	}
}