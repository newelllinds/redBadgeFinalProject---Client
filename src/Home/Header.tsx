import React from "react";
import bgimage from "../Images/headerImage3.jpg";
import { Jumbotron } from "reactstrap";
import logo from '../Images/logo.png';

const Header = () => {
  return (
    <header id = 'header-background'>
      <div className="bgimg">
      </div>
    </header>
    // <div className="container">
    //   <Jumbotron
    //     className="jumbotron"
    //     style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
    //   ></Jumbotron>
  );
};

export default Header;