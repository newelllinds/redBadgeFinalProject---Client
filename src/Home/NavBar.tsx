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

    //look for JS hard refresh and run between line 29-30
    clearToken = () => {
      localStorage.clear();
      this.setState({
        sessionToken: ''
      })
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