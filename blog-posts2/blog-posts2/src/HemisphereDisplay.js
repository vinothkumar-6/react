import React from 'react';
import './Hemisphere.css';
import northernPic from './image/pic.png'



const hemisphereConfig ={
    Northern: {
        text: 'it is nothern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'it is Southern hemisphere',
        picture: northernPic
    }
}
const HemisphereDisplay= ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
   const {text, picture} = hemisphereConfig[hemisphere]
    return(
        <div>
        <div className={hemisphere} >
            <div className='ui raised text container segment'>
               <div className='image'>
                   <img src={picture} alt = "Picture"/>
          </div>
            <div className='ui teal bottom attached label'>
                <h1>{text}</h1>
            </div>
        </div>
        </div>
        <h1>Hello</h1>
        </div>
    )
}

export default HemisphereDisplay;