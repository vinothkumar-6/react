import React from "react";
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Card from "./components/Card";

class App extends React.Component{



    render() {
        return (
            <BrowserRouter>
            <div className='ui container' style={{marginTop: '30px'}}>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/card/:user' element={<Card />} />
                </Routes>

            </div>
            </BrowserRouter>
        );
    }
}
export default App;