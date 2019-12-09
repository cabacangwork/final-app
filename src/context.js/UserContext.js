import React, { createContext, Component } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    logIn = () => {
        this.setState({isAuthenticated: true})
    }

    logOut = () => {
        this.setState({isAuthenticated: false})
    }

    render() {
        return(
            <UserContext.Provider value={{...this.state, logIn: this.logIn, logOut: this.logOut}}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;