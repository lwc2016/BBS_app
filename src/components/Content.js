import React, { Component } from "react";
import style from "./content.css";

export default class Content extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style["content"] + " container"}>
                {this.props.children}
            </div>
        )
    }
}