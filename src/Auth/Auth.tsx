import React, { Component } from 'react';
// import Login from './Login'

export interface AuthProps {
    
}
 
export interface AuthState {
    isLogin: boolean
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {
            isLogin : false
        };
    }

    isLoginHandler(){
        this.setState({
            isLogin: !this.state.isLogin
        })
    }
    render() { 
        return (
            <div>
            Hello from Auth
            </div>
        );
    }
}
 
export default Auth;