import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigationbar = (props) => (
  <Navbar
    expand="lg"
    className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
  >
    <Navbar.Brand href="/">GeoProjekt</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="classes.ml-auto">
        <Nav.Item>
          <Nav.Link
            className="bi bi-geo-alt-fill"
            onClick={() => {
              props.doIcon(true);
              props.doLacalization(true);
            }}
          >
            Użyj mojej lokalizacji
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigationbar;
