import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar>
      <Container className="justify-content-center">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/contacto" className="">
          Contacto
        </Link>
        <Navbar.Brand>Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Menu;
