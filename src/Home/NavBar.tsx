import React from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';


export interface NavBarProps {
  // clearToken: Function
}
 
export interface NavBarState {
}
 
class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {};
    }

    clearToken = () => {
      localStorage.clear();
      this.pageRefresh();
    }

    pageRefresh = () => {
      window.location.reload(true);
    }

    render() { 
        return (
          <div>
          <h4 className='text-center'>Indy Art Store</h4>
          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink disabled href="#">Disabled Link</NavLink> */}
              <Button className='logout' onClick= {()=> this.clearToken()}>Logout</Button>
            </NavItem>
          </Nav>
          <hr />
        </div>
      );
    }
}
 
export default NavBar;