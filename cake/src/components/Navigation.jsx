import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import { HouseFill } from "react-bootstrap-icons";
import { Cake } from "react-bootstrap-icons";
import { PersonLinesFill } from "react-bootstrap-icons";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="m-3 text-decoration-none text-white">
              <HouseFill color="white" size={30} /> Home
            </Link>
            <Link
              to="/contacto"
              className="m-3 text-decoration-none text-white"
            >
              <PersonLinesFill color="white" size={30} /> Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="text-white">Happy Cake</Navbar.Brand>
        <Cake color="white" size={30} />
      </Container>
    </Navbar>
  );
};

export default Menu;
