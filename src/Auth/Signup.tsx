import React, { Component } from 'react';

interface SignupProps {
    name?: any;
    value?: any;
}
interface SignupState {
    username: string,
    password: string,
    errors : {
        username : string,
        password : string
    }
}
// const Regex = RegExp(/^\s?[A-Z0-9._+-]{0,}@[A-Z0-0._+-]+\.[A-Z0-9]{2,4}\s?$/i);
const Regex = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

class Signup extends Component<SignupProps, SignupState> {
    constructor(props: SignupProps) {
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

    handleChange = (event : any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username must be at least 5 characters long' : '';
                break;
            case 'password':
                // errors.password = value.length < 8 ? 'Password must be 8 characters long' : '';
                errors.password = Regex.test(value)? '': 'Password must be at least 8 characters and include at least 1 number, 1 upper case letter, 1 lower case letter, and 1 special character'
                break;
            default:
                break;
        }
        this.setState(Object.assign(this.state, { errors,[name]: value}));
        console.log(this.state.errors);
    }

    handleSubmit = (event : any) => {
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if(validity === true){
            console.log('Can Register');
        }else{
            console.log('You cannot be registered!')
        }
    }

    render() {
        const {errors} = this.state
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Sign Up</h2>
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
                            <button>Sign Me Up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;