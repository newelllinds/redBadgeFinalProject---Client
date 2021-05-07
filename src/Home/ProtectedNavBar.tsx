import * as React from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';

export interface ProtectedNavBarProps {
    
}
 
export interface ProtectedNavBarState {
    
}
 
class ProtectedNavBar extends React.Component<ProtectedNavBarProps, ProtectedNavBarState> {
    constructor(props: ProtectedNavBarProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
    
      <NavItem>
        <Link to='/artist/view-profile'>
        <NavLink>View My Artist Profile</NavLink>
        </Link>
      </NavItem>
      <NavItem>
      <Link to='/listing/view-my-listings'>
        <NavLink>View My Shop</NavLink>
        </Link>
      </NavItem>
            </div>
          );
    }
}
 
export default ProtectedNavBar;