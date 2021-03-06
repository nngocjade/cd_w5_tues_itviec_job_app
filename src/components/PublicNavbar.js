import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="mr-auto">
        <img src={logo} alt="CoderSchool" width="50px" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} exact to="/test">
          Testing
        </Nav.Link>
        <Nav.Link as={Link} exact to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} exact to="/jobs/">
          jobList
        </Nav.Link>
        <Nav.Link as={Link} exact to="/jobs/:id">
          jobTitleTitle
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
