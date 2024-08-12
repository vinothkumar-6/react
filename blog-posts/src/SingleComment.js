import React from 'react';
import pic from "./image/pics.png";



const SingleComment = (props) =>{

    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={pic} alt="profile picture"/>
            </a>
            <div className='content'>
                <a href="/" className='author'>
                    {props.name}
                </a>
                <div className='metadata'>
                        <span className='date'>
                            {props.dateValue}
                        </span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default SingleComment;