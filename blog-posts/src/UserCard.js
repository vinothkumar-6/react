import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";

const UserCard = (props) => {

    return (

                            <div className='ui card'>
                                <div className='content'>
                                    <div className='header'> Alex Know</div>
                                    <div className='description'>Hello I'm Alex.</div>
                                    {props.children}
                                </div>
                                <div className='ui bottom button'>
                                    <i className='add icon'></i>
                                    Add Friend
                                </div>
</div>
                                )
                            }

export default UserCard;