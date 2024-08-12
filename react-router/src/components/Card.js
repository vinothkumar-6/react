import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Card = () => {
    const { user } = useParams();
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(user);
        console.log(user);
    }, [user]);

    return (
        <div className='ui raised very padded text container segment'
             style={{marginTop: '80px'}}>
            <h3 className='ui header'>{username}</h3>
            <p>Lorem ipsum dolor card card card</p>
        </div>
    );
}

export default Card;
