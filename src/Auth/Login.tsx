import React from 'react';
import { Component } from 'react';

export interface LoginProps {
    updateToken: Function;

}
 
export interface LoginState {
    username: string,
    password: string
}
 
class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { username: '', password: ''};
    }

    handleSubmit = (event : any ) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user: {username: this.state.username, password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.sessionToken)
            this.props.updateToken(data.sessionToken)
        })
    }
    render() { 
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Log In</h2>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className='username'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' onChange={(e) => this.setState({ username: e.target.value })}/>
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' onChange={(e) => this.setState({ password: e.target.value })}/>
                        </div>
                        <div className='submit'>
                            <button>Log Me In</button>
                        </div>
                    </form>
                </div>
            </div>
          );
    }
}
 
export default Login;