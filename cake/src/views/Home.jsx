import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Cake2Fill } from 'react-bootstrap-icons';

const Inicio = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Bienvenidos a Happy Cake</h1>
            <p>El lugar de los pasteles felices</p>
            <Cake2Fill color="red" size={96} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Inicio;
