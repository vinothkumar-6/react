import React from "react";
import NavBar from "./components/NavBar";
import Todolist from "./components/Todolist";
import './index.css';
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
function App() {
    return (
        <div className='App'>
            <div className='ui raised very padded text container segment'>
                <ThemeContextProvider>
                    <AuthContextProvider>
                    <NavBar/>
                    <Todolist/>
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        </div>
    )
}

export default App;