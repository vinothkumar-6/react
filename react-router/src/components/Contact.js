import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) =>{
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate('/about');
    //     }, 2000);
    //
    //     // Cleanup the timer if the component unmounts before the timer completes
    //     return () => clearTimeout(timer);
    // }, [navigate]);
    return(
        <div>
            <Modal />
            <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
                <Link to='/card/alex' className='ui header'>Alex</Link>
                <p> Hey Alex, How are you?</p>
            </div>
            <div className='ui raised very padded text container segment' style={{marginTop: '80px'}}>
                <Link to='/card/vinoth' className='ui header'>Vinoth</Link>
                <p> Hey Vinoth, How are you?</p>
            </div>
        </div>
    )
}
export default Contact;