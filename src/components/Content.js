import React, { Component } from "react";
import "./content.css";

export default class Content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container content">
                {this.props.children}
            </div>
        )
    }
}