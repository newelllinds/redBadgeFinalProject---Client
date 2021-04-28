import React from 'react';
import './App.css';
// import Signup from './Auth/Signup'
// import Login from './Auth/Login'
import Auth from './Auth/Auth'
import HomePage from './Home/HomePage'
import NavBar from './Home/NavBar'
import {Route, Switch} from 'react-router-dom';
import Header from './Home/Header'
import Footer from './Home/Footer'
import ArtistProfileCreate from './ArtistProfile/ArtistProfileCreate';

//Add browser router


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

  // clearToken = () => {
  //   localStorage.clear();
  //   this.setState({
  //     sessionToken: ''
  //   })
  // }

  protectedViews = () => {
    return localStorage.getItem('token') ? (
      <HomePage token={this.state.sessionToken}/>
    ) : (
      <Auth updateToken={this.updateToken} />
    )
  }

  render() { 
    return (
      <div>
        <Header />
        {/* <ArtistProfileCreate token = {this.state.sessionToken} /> */}

        {this.protectedViews()}

        <Footer />

      </div>
      );
  }
}
 
export default App;
