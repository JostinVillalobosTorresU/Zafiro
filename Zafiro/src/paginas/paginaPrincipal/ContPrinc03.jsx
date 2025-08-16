import { Col, Container, Row } from "react-bootstrap";

import "./ContPrinc03.css";

import p5 from "../../img/pa05.jpg"
import p12 from "../../img/pa12.jpg"
import p7 from "../../img/pa07.jpg"
import p13 from "../../img/pa13.jpg"
import p4 from "../../img/pa04.jpg"
import p1 from "../../img/pa01.jpg"
import p2 from "../../img/pa02.jpg"
import p14 from "../../img/pa14.jpg"
import p15 from "../../img/pa15.jpg"
import p10 from "../../img/pa10.jpg"
import p3 from "../../img/pa03.jpg"

const imagenes = [
  p5,
  p12,
  p7,
  p13,
  p4,
  p1,
  p2,
  p14,
  p15,
  p10,
  p3,
];

export function ContPrinc03 () {
    return (
      <>
        <Container fluid className="contenedor03">
          <Row className="hexagon-gallery">
            <Col>
              <h2>Explora Nuestros Destinos</h2>
              <p className="intro">
                Descubre las ciudades y universidades que te esperan en tu
                próximo intercambio.
              </p>
            </Col>
            <Col>
              <p className="intro">
                Vive una experiencia internacional única: conoce culturas, haz
                amigos alrededor del mundo y enriquece tu formación académica.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="hexagon-grid">
                {imagenes.map((img, i) => (
                  <div key={i} className="hexagon">
                    <img src={img} alt={`Destino ${i + 1}`} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}