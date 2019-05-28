import React, { Component } from "react";
import Post from "../../components/Post/Post.js";
import Pagination from "../../components/Pagination/Pagination.js";

export default class PostList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Post></Post>
                <Post></Post>
                <Pagination total={132} current={5}></Pagination>
            </div>
        )
    }
}