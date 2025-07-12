import { Button, Col, Container, Row } from "react-bootstrap";

import { AiOutlineGlobal, } from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { BsFillDiagram3Fill } from "react-icons/bs";

import "./ContPrinc02.css";
import fondoImg from "../img/pa09.png";
import { Link } from "react-router-dom";

export function ContPrinc02 () {
    return (
      <>
        <Container fluid className="contenedor02">
          <Row className="g-0">
            <Col sm={6}>
              <img
                src={fondoImg}
                alt="Fondo"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </Col>
            <Col className="info02" sm={6}>
              <h1>Transforma tu Futuro con un Intercambio Universitario</h1>
              <p className="textContenido">
                Nuestros programas de intercambio ofrecen una experiencia
                educativa y cultural inigualable. Aprende nuevos idiomas,
                desarrolla habilidades globales y construye una red
                internacional de contactos.
              </p>
              <ul>
                <li>
                  <header>
                    <AiOutlineGlobal className="iconp02" />
                    <div>
                      <strong>Experiencia Internacional</strong>
                      <span>
                        Sumérgete en una nueva cultura y amplía tu perspectiva
                        global.
                      </span>
                    </div>
                  </header>
                </li>
                <li>
                  <header>
                    <SlGraduation className="iconp02" />
                    <div>
                      <strong>Educacion de Calidad</strong>
                      <span>
                        Sumérgete en una nueva cultura y amplía tu perspectiva
                        global.
                      </span>
                    </div>
                  </header>
                </li>
                <li>
                  <header>
                    <BsFillDiagram3Fill className="iconp02" />
                    <div>
                      <strong>Red Global</strong>
                      <span>
                        Sumérgete en una nueva cultura y amplía tu perspectiva
                        global.
                      </span>
                    </div>
                  </header>
                </li>
              </ul>
              <Link className="btnp02" to='/Descubre-como'>
              Descubre como
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
}