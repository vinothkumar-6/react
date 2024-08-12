import React, {createContext} from "react";

export const AuthContext = createContext();


class AuthContextProvider extends React.Component{

    state = {
        isLoggedin: false
    };

    changeAuthStatus = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };
    render() {
        return(
            <div>
                <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        );
    }
}

export default AuthContextProvider;