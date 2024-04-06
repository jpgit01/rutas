import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Inicio from "./views/Home";
import Contacto from "./views/Contact";
import NoRuta from "./views/NotFound";

const App = () => {
  return (
    <Container>
      <Navigation />
      <Row>
        <Col className="mt-3">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoRuta />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
