import React, { Component } from "react";
import Post from "../../components/Post/Post.js";

export default class PostList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Post></Post>
                <Post></Post>
            </div>
        )
    }
}