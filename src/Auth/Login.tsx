import React from 'react';
import { Component } from 'react';
import { FunctionOrConstructorTypeNode } from 'typescript';
import APIURL from '../helpers/environment'

export interface LoginProps {
    updateToken: Function,
    updateRole: Function
}
 
export interface LoginState {
    username: string,
    password: string,
    errors : {
        username : string,
        password : string
    }
}

const Regex = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
 
class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        const initialState = {
            username : '',
            password : '',
            errors : {
                username : '',
                password : ''
            }
        }
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username must be at least 5 characters long' : '';
                break;
            case 'password':
                errors.password = Regex.test(value)? '': 'Password must be at least 8 characters and include at least 1 number, 1 upper case letter, 1 lower case letter, and 1 special character'
                break;
            default:
                break;
        }
        this.setState(Object.assign(this.state, { errors,[name]: value}));
        console.log(this.state.errors);
    }

    handleSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if(validity === true){
        fetch(`${APIURL}/user/login`, {
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
            console.log(data.user.role)
            this.props.updateRole(data.user.role)
            this.props.updateToken(data.sessionToken)
            let checkToken = data.sessionToken;
            if (checkToken === undefined){
                alert('Please try again');
            return
            } else {
                alert('You have successfully logged in!')
            } 
        })
    }else{
        alert('Please ensure your username and password meet the criteria')
    }
}

    render() { 
        const {errors} = this.state
        return (
            <div className='siteName'>
                          {/* <h4 className='text-center'>Indy Art Store</h4> */}
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Log In</h2>
                    <form onSubmit={this.handleSubmit} noValidate >
                        <div className='username'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' onChange={this.handleChange}/>
                            {errors.username.length > 0 && <span style={{color: 'red'}}>{errors.username}</span>}
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' onChange={this.handleChange}/>
                            {errors.password.length > 0 && <span style={{color: 'red'}}>{errors.password}</span>}
                        </div>
                        <div className='submit'>
                            <button>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
          );
    }
}
 
export default Login;