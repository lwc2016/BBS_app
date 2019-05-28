import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { Route, Switch } from "react-router-dom";
import Content from "../../components/Content/Content.js";
import Login from "../../pages/Login/Login.js";
import Register from "../../pages/Register/Register.js";
import PostList from "../../pages/PostList/PostList.js";
import PostDetail from "../../pages/PostDetail/PostDetail.js";

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
                        <Route path="/post/:id" component={PostDetail}></Route>
                    </Switch>
                </Content>
            </div>
        )
    }
}