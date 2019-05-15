import React, { Component } from "react";
import Navbar from "../../components/Navbar.js";
import { Route, Switch } from "react-router-dom";
import Content from "../../components/Content.js";
import Login from "../../pages/Login/Login.js";
import Register from "../../pages/Register/Register.js";
import PostList from "../../pages/PostList/PostList.js";

export default class Layout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <Content>
                    <Switch>
                        <Route exact path="/" component={PostList}></Route>
                        <Route path="/login"  component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>
                </Content>
            </div>
        )
    }
}