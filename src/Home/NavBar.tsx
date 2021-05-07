import React from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { IArtistProfileResponse } from '../ArtistProfile/Interfaces';
import ProtectedNavBar from './ProtectedNavBar';


export interface NavBarProps {

}
 
export interface NavBarState {
  role: string
}
 
class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {
          role: ''
        };
    }

    clearToken = () => {
      localStorage.clear();
      this.pageRefresh();
    }

    pageRefresh = () => {
      window.location.reload(true);
    }

    protectedNav = () => {
      return localStorage.getItem('role') === '2' ? <ProtectedNavBar />
      : null
    }

    // componentDidMount() {
    //   const role = localStorage.getItem('role')
    //   if (role) {
    //     this.setState({role: role})
    //   }
    // }

    render() { 
        return (
          <div>
          <h4 className='text-center'>Indy Art Store</h4>
    <Nav>
    {/* { localStorage.getItem('role') ==='2' ? 
      
      <NavItem>
        <Link to='/artist/view-profile'>
        <NavLink>View Your Artist Profile</NavLink>
        </Link>
      </NavItem>
      <NavItem>
      <Link to='/listing/view-my-listings'>
        <NavLink>View Your Shop</NavLink>
        </Link>
      </NavItem>
     : null } */}
    {this.protectedNav()}
    {/* <NavItem>
      <Link to='/artist/view-artist-profiles'>
      <NavLink>View Artist Profiles</NavLink>
      </Link>
    </NavItem> */}
    <NavItem>
    <Link to='/listing/view-all-listings'>
      <NavLink>Shop</NavLink>
      </Link>
    </NavItem>
    <NavItem>
    <Link to='/artist/view-artist-profiles'>
      <NavLink>View Artists</NavLink>
      </Link>
    </NavItem>
    {localStorage.getItem('token') !== null ? 
    <NavItem>
      <Button className='logout' onClick= {()=> this.clearToken()}>Logout</Button>
    </NavItem>
    : null}
  </Nav>
          <hr />
        </div>
      );
    }
}
 
export default NavBar;