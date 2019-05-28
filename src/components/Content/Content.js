import React from "react";
import style from "./content.css";

export default (props)=>{
    return (
        <div className={style["content"] + " container"}>
            {props.children}
        </div>
    )
}