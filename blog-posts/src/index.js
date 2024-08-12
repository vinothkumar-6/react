import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from "./UserCard";

const App = () => {
    const dateValue = Date.toLocaleString();
    console.log(dateValue);
    return(
        <div className='ui comments'>

            <UserCard> <SingleComment name='Siri' dateValue={dateValue} text="Hey "/> </UserCard>
            <UserCard>  <SingleComment name='Computer' dateValue={dateValue} text="Hey Hey" /> </UserCard>
            <UserCard> <SingleComment name='Alexa' dateValue={dateValue}  text="Hey Hsdey" />  </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)