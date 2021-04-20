import React, { Component } from 'react';

interface SignupProps {
    updateToken: Function;
}

interface SignupState {
    username: string,
    password: string,
    role: number,
    errors : {
        username : string,
        password : string
    }
}
const Regex = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

class Signup extends Component<SignupProps, SignupState> {
    constructor(props: SignupProps) {
        super(props);
        const initialState = {
            username : '',
            password : '',
            role: 0,
            errors : {
                username : '',
                password : '',
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
            fetch('http://localhost:3000/user/create', {
                method: 'POST',
                body: JSON.stringify({user: {username: this.state.username, password: this.state.password, role: Number(this.state.role)}}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(data.sessionToken)
                let checkToken = data.sessionToken;
                if (checkToken === undefined){
                    alert('Please try again');
                return
                } else {
                    alert('You have successfully signed up!')
                } 
            })
        }else{
            alert('Please ensure your username and password meet the criteria')
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
                        <div className='role'>
                            <label htmlFor='role'>Role</label>
                            <select id='role' name='role' required onChange={this.handleChange}>
                            <option>Select One:</option>    
                            <option value='2'>Artist</option>
                            <option value='3'>Supporter</option>
                            </select>
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