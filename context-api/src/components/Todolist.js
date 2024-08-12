import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";


// class Todolist extends React.Component {
//
//     static contextType = ThemeContext;
//     render() {
//         const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//
//         console.log(theme)
//         return (
//             <div style={{background: theme.background, color:theme.text, height: '140px', textAlign: 'center'}}>
//                 <p className='item'>Plan the trip</p>
//                 <p className='item'>Shopping trip</p>
//                 <p className='item'>Go for a walk</p>
//                 <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
//             </div>
//         )
//     }
// };

const Todolist=() => {
    const {isDarkTheme, lightTheme, darkTheme, changeTheme} =  useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
            <p className='item'>Plan the trip</p>
            <p className='item'>Shopping trip</p>
            <p className='item'>Go for a walk</p>
            <button className='ui button primary' onClick={changeTheme}>Change the theme</button>
        </div>
    );
}

export default Todolist;