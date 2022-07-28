import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const MNavbar = () => {
  return (
    <section>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </section>
  );
};
export default MNavbar;
