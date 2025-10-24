import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../componentes/Footer";
import { QhCarta } from "./QhCarta";
import { QpCarta } from "./QpCarta";
import { SeccionME } from "./SeccionME";

import "./Movilidadentrante.css";

export function MovilidadesE() {
  return (
    <>
      <Container fluid className="contenedorME">
        <Container fluid className="contenedorSme">
          <SeccionME></SeccionME>
        </Container>
        <Container fluid className="contenedorQp">
          <Row>
            <Col>
              <h2 className="tqmv">¿Quiénes pueden participar?</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-evenly qpContenedorCarta">
            <QpCarta></QpCarta>
          </Row>
        </Container>
        <Container fluid className="contQdh">
          <Row>
            <Col>
              <h2 className="qhTitulo">¿Que debes hacer?</h2>
            </Col>
          </Row>
          <Row>
            <QhCarta></QhCarta>
          </Row>
        </Container>
        <Footer></Footer>
      </Container>
    </>
  );
}