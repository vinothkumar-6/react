import React from 'react';
import ReactDOM from 'react-dom/client';


function hello(){
    return [1,2,34,5];
}

const style = {backgroundColor : 'red', color:'white'};
//component
 const App = () => {
     const buttonText ="Click me!"
     return(
         <div>
             <label htmlFor="name" className="label">Enter e-mail address</label>
             <input id="name"/>
             <button style={{backgroundColor: 'red', color: 'white'}}>
                 {buttonText}
                 {/*{hello()}*/}
             </button>
             {/*<button style={style}>*/}
             {/*    {buttonText}*/}
             {/*    {hello()}*/}
             {/*</button>*/}
         </div>
     )
 }

// ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
// )

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
