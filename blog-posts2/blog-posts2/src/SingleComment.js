import React from "react";
import ReactDOM from "react-dom";
import pic from './image/pic.png';


const SingleComment = (props) => {
    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={pic} alt='profile picture'/>
            </a>
            <div className='content'>
                <a href="/" className='author'>
                    {props.name}
                </a>
                <div className='text'>
                    {props.texts}
                </div>
            </div>

        </div>
    )
}

export default SingleComment;
