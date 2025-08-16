import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../componentes/Footer";
import { QhCarta } from "./QhCarta";
import { QpCarta } from "./QpCarta";

import "./Movilidadentrante.css";

export function MovilidadesE() {
  return (
    <>
      <Container fluid className="contenedorQp">
        <Row>
          <Col>
            <h1 className="tqmv">¿Quiénes pueden participar?</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-evenly qpContenedorCarta">
          <QpCarta></QpCarta>
        </Row>
      </Container>
      <Container fluid className="contQdh">
        <Row>
          <Col>
            <h1 className="qhTitulo">¿Que debes hacer?</h1>
          </Col>
        </Row>
        <Row>
          <QhCarta></QhCarta>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}