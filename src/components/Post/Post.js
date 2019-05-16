import React, { Component } from "react";
import style from "./post.css";

export default class Post extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={style["post"]}>
                <div className={"d-flex justify-content-between align-items-center"}>
                    <div className="d-flex align-items-center">
                        <div className={style["avatar"]}>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557977983920&di=71d8076824b564f541572afe4076e4e2&imgtype=0&src=http%3A%2F%2Fimg.52z.com%2Fupload%2Fnews%2Fimage%2F20180509%2F20180509070223_66519.jpg" alt=""/>
                        </div>
                        <a className={style["link"]} href="">服务器迁移至 aws 日本机房</a>
                    </div>
                    <span>2018-10-02</span>
                </div>
                <div className={style["post-bottom"]}>
                    <span className={style["span"]}>分类：前端</span>
                    <span className={style["span"]}>评论：12</span>
                    <span className={style["span"]}>点赞：3</span>
                </div>
            </div>
        )
    }
}