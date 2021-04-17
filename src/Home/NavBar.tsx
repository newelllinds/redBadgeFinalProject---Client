import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export interface NavBarProps {
    // sessionToken: string
}
 
export interface NavBarState {
    // collapsed: boolean
    // showSiteBar: boolean,
    // isLoggedIn: boolean
}
 
class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {};
    }

    // toggleNavbar = () => this.setState.collapsed()

    render() { 
        return (
            <div>
                      <Navbar color="primary" dark>
        {/* <NavbarBrand href="/" className="me-auto">
          Routes Practice
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/contact" onClick={toggleNavbar}>
              <NavLink>Contact Us</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/store" onClick={toggleNavbar}>
              <NavLink>Store</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>

            </div>
          );
    }
}
 
export default NavBar;