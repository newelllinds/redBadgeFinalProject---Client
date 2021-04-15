import React from 'react';
import './App.css';
// import Signup from './Auth/Signup'
// import Login from './Auth/Login'
import Auth from './Auth/Auth'

export interface AppProps {

}
 
export interface AppState {
  sessionToken: string,
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { sessionToken : '' };
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    console.log(newToken)
    this.setState({
      sessionToken: newToken
    })

  }

  clearToken = () => {
    localStorage.clear();
    this.setState({
      sessionToken: ''
    })
  }


  render() { 
    return (
      <div>
        <Auth updateToken={this.updateToken}/>


      </div>
      );
  }
}
 
export default App;
