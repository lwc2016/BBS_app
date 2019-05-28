import React, { Component } from "react";
import style from "./PostDetail.css";

export default class PostDetail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h4>服务器迁移至 aws 日本机房</h4>
                <div>
                    <span>张三</span>
                    <span>2018-10-24</span>
                </div>
                <div>
                    <span className={style["tag"]}>分类：<i>前端</i></span>
                    <span className={style["tag"]}>浏览：<i>20</i></span>
                    <span className={style["tag"]}>点赞：<i>22</i></span>
                </div>
                <div>
                    有人说，每个人都是平等的；
                    也有人说，人生来就是不平等的；
                    在人类社会中，并没有绝对的公平，
                    一件事，并不是所有人都能去做；
                    一样物，并不是所有人都能够拥有。
                    每个人都有自己的角色，每种角色都有对某种资源的一定权利，或许是拥有，或许只能是远观而不可亵玩。
                    把这种人类社会中如此抽象的事实，提取出来，然后写成程序，还原本质的工作，就是我们程序员该做的事了。
                    有了一个这么有范儿的开头，下面便来谈谈基于RESTful，如何实现不同的人不同的角色对于不同的资源不同的操作的权限控制。
                </div>
            </div>
        )
    }
}