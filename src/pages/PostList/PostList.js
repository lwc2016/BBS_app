import React, { Component } from "react";
import Post from "../../components/Post/Post.js";
import Pagination from "../../components/Pagination/Pagination.js";

export default class PostList extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 1
        }
    }
    handlePageChange = (pageNo)=>{
        this.setState({current: pageNo});
    }
    render(){
        return(
            <div>
                <Post></Post>
                <Post></Post>
                <Pagination onChange={this.handlePageChange} total={321} current={this.state.current}></Pagination>
            </div>
        )
    }
}