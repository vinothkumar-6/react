import React from "react";
import SingleComment from "./SingleComment";
import ReactDOM from "react-dom";
const NameCard = (props) => {
    return (
        <div className='ui card'>

                {props.children}
            </div>

    )
}

export default NameCard;