import React, { Component } from "react";
import style from "./Pagination.css";
import propTypes from "prop-types";


export default class Pagination extends Component{
    static propTypes = {
        total: propTypes.number,
        pageSize: propTypes.number,
        current: propTypes.number
    };
    static defaultProps = {
        pageSize: 10,
        current: 1
    };
    constructor(props){
        super(props);
        this.state = {
            pageCount: Math.ceil(this.props.total / this.props.pageSize)
        }
    }
    render(){
        const current = this.props.current;
        const pageCount = this.state.pageCount;
        const pages = [];

        if(current < 5){
            let size = pageCount <= 5 ? pageCount : 5;
            for(let i = 2; i <= size; i ++){
                pages.push(i);
            }
        }else if(pageCount - current < 5){

        }else{
            pages.push(current - 2);
            pages.push(current - 1);
            pages.push(current);
            pages.push(current + 1);
            pages.push(current + 2);
        }
        return (
            <nav className={style["container"]} aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className={"page-item" + " " + (current === 1 ? "active": "")}>
                        <a className="page-link" href="#">1</a>
                    </li>
                    {pages.map(page => (
                        <li key={page} className={"page-item" + " " + (current == page ? "active": "")}>
                            <a className="page-link" href="#">{page}</a>
                        </li>
                    ))}
                    <li className={"page-item" + " " + (current ===  pageCount ? "active": "")}>
                        <a className="page-link" href="#">{pageCount}</a>
                    </li>
                    <li className="page-item">
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