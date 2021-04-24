import React from "react";
import bgimage from "../Images/headerImage3.jpg";
import { Jumbotron } from "reactstrap";
import logo from '../Images/logo.png';

const Header = () => {
  return (
    <div className="container">
      <Jumbotron
        className="jumbotron"
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      ></Jumbotron>
      <div className="bar"></div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div> */}
      <hr />
      {/* <h4 className="text-center">Welcome to Indy Art Store</h4> */}
    </div>
  );
};

export default Header;