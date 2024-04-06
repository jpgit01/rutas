import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="m-3 text-decoration-none text-white">
              Home
            </Link>
            <Link to="/contacto" className="m-3 text-decoration-none text-white">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="text-white">Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Menu;
