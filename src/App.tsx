import React from 'react';
import './App.css';
// import Signup from './Auth/Signup'
// import Login from './Auth/Login'
import Auth from './Auth/Auth'
import HomePage from './Home/HomePage'
import NavBar from './Home/NavBar'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './Home/Header'
import Footer from './Home/Footer'
import ArtistProfileCreate from './ArtistProfile/ArtistProfileCreate';
import ArtistProfileTable from './ArtistProfile/ArtistProfileTable';
import DisplayAllShopListings from './Supporter/DisplayAllShopListings';
import ArtistIndex from './ArtistProfile/ArtistIndex'
import ShopIndex from './Shop/ShopIndex'
import DisplayShopListing from './Shop/DisplayShopListing'
import FetchAllShopListings from './Supporter/FetchAllShopListings';

//Add browser router


export interface AppProps {

}
 
export interface AppState {
  sessionToken: string,
  role: Number
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { 
      sessionToken : '',
      role: 0 };
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    console.log(newToken)
    this.setState({
      sessionToken: newToken
    })
  }

  updateRole = (userRole: Number) => {
    localStorage.setItem('role' , JSON.stringify(userRole))
    console.log(userRole)
    this.setState({
      role: userRole
    })
  }

  protectedViews = () => {
    return localStorage.getItem('token') ? (
      <HomePage token={this.state.sessionToken} role={this.state.role}/>
    ) : (
      <Auth updateToken={this.updateToken} updateRole={this.updateRole}/>
    )
  }

  render() { 
    return (
      <div>
        <Router>
        <Header />
        {/* <NavBar /> */}
        {this.protectedViews()}
        <Switch>
          {/* <Route exact path= '/'>
          {this.protectedViews()} */}
          {/* </Route> */}

        {/* <Route exact path='/artist/view-profile' component={ArtistIndex}/> */}
          {/* <Route exact path='/artist/view-profile' >
            {this.state.sessionToken ? <ArtistIndex token={this.state.sessionToken}/> : <Redirect to='/'/>}
          </Route> */}

          {/* <Route exact path='/listing/view-my-listings'>
          {this.state.sessionToken ? <ShopIndex token={this.state.sessionToken}/> : <Redirect to='/'/>}
          </Route> */}

          <Route exact path='/listing/view-all-listings' component={FetchAllShopListings} />
        </Switch>


        <Footer />
        </Router>
      </div>
      
      );
  }
}
 
export default App;
