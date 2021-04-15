import React from 'react';
import Signup from './Signup';
import Login from './Login'

export interface AuthProps {
    updateToken: Function
    
}
 
export interface AuthState {
    // showLogin: boolean
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <div>
                <Signup updateToken={this.props.updateToken} />
                <Login updateToken={this.props.updateToken} />
            </div>
        );
    }
}
 
export default Auth;