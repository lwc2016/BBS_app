import React, { Component } from "react";
import style from "./Pagination.css";
import propTypes from "prop-types";


export default class Pagination extends Component{
    static propTypes = {
        total: propTypes.number,
        pageSize: propTypes.number,
        current: propTypes.number,
        onChange: propTypes.func
    };
    static defaultProps = {
        pageSize: 10,
        current: 1
    };
    constructor(props){
        super(props);
        this.state = {
            pageCount: Math.ceil(this.props.total / this.props.pageSize),
            arrow_left: false,
            arrow_right: false
        }
    }
    handlePrev = ()=>{
        let pageNo = this.props.current - 1;
        if(pageNo >= 1){
            this.props.onChange(pageNo);
        }
    };
    handleNext = ()=> {
        let pageNo = this.props.current + 1;
        if(pageNo <= this.state.pageCount){
            this.props.onChange(pageNo);
        }
    };
    handleChange(pageNo){
        this.props.onChange(pageNo);
    }
    handleLeft = ()=>{
        let pageNo = this.props.current - 5;
        if(pageNo >= 1){
            this.props.onChange(pageNo);
        }else{
            this.props.onChange(1);
        }
    }
    handleRight = ()=>{
        let pageNo = this.props.current + 5;
        if(pageNo <= this.state.pageCount){
            this.props.onChange(pageNo);
        }else{
            this.props.onChange(this.state.pageCount);
        }
    }
    render(){
        const current = this.props.current;
        const pageCount = this.state.pageCount;
        const pages = [];
        let beforeDot = false;
        let afterDot = false;
        if(pageCount > 5){
            if(current < 5){
                let size = pageCount <= 5 ? pageCount : 5;
                for(let i = 2; i <= size; i ++){
                    pages.push(i);
                }
                beforeDot = false;
                afterDot = true;
            }else if(pageCount - current < 5){
                for(let i = pageCount - 4; i <= pageCount - 1; i ++){
                    pages.push(i);
                }
                beforeDot = true;
                afterDot = false;
            }else{
                pages.push(current - 2);
                pages.push(current - 1);
                pages.push(current);
                pages.push(current + 1);
                pages.push(current + 2);
                beforeDot = true;
                afterDot = true;
            }
        }else{
            for(let i = 2; i <= pageCount - 1; i ++){
                pages.push(i);
            }
            beforeDot = false;
            afterDot = false;
        }
        return (
            <nav className={style["container"]} aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={this.handlePrev} className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li onClick={this.handleChange.bind(this, 1)} className={"page-item" + " " + (current === 1 ? "active": "")}>
                        <a className="page-link" href="#">1</a>
                    </li>
                    {beforeDot ? (
                        <li className={style["dot-container"]} onMouseLeave={()=> this.setState({arrow_left: true})} onMouseEnter={()=> this.setState({arrow_right: false})}>
                            {this.state.arrow_left ? <img onClick={this.handleLeft}  className={style["arrow-icon"]} src={require("./icons/arrow_left.png")} alt=""/> : <i className={style["dot"]}>. . .</i>}
                        </li>
                    ) : null}
                    {pages.map(page => (
                        <li onClick={this.handleChange.bind(this, page)} key={page} className={"page-item" + " " + (current == page ? "active": "")}>
                            <a className="page-link" href="#">{page}</a>
                        </li>
                    ))}
                    {afterDot ? (
                        <li className={style["dot-container"]} onMouseEnter={()=> this.setState({arrow_right: true})} onMouseLeave={()=> this.setState({arrow_right: false})}>
                            {this.state.arrow_right ? <img onClick={this.handleRight} className={style["arrow-icon"]} src={require("./icons/arrow_right.png")} alt=""/> : <i className={style["dot"]}>. . .</i>}
                        </li>
                    ) : null}
                    {
                        this.state.pageCount > 1 ? (
                            <li onClick={this.handleChange.bind(this, pageCount)} className={"page-item" + " " + (current ===  pageCount ? "active": "")}>
                                <a className="page-link" href="#">{pageCount}</a>
                            </li>
                        ): null
                    }
                    <li onClick={this.handleNext} className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}