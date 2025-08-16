import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import logo from "../../img/UnicLogo.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DesplegableDestinos } from "./DesplegablesDestino";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import imgfondoBuscar from "../../img/DestinosFondoBuscar.png";
import './FormularioDestinos.css';



export function FormularioDestinos () {
    return (
      <Container fluid className="position-absolute md fdCuerpo">
        <Form className="fdContForm">
          <div className="fdContFormulario">
            <div className="fdContenedorImg">
              <img
                src={logo}
                alt="Logo de la Fundacion Universitaria Colombo Internacional"
              />
            </div>
            <div>
              <div>
                <p className="fdFomularioTitulo">
                  Nuestras Movilidades Académicas
                </p>
              </div>
              <div className="fdFormularioTexto">
                <p>
                  Explora todas las universidades socias de Unicolombo a través
                  de este buscador, donde podrás filtrar por país, área de
                  estudio, tipo de convenio y más. Así encontrarás fácilmente
                  las opciones de intercambio que mejor se adapten a tu perfil
                  académico.
                  <br />
                  <strong>Recuerda:</strong> La disponibilidad de plazas puede
                  cambiar en cada convocatoria. Antes de postularte, asegúrate
                  de que la universidad y el programa de tu interés estén
                  incluidos en la convocatoria vigente.
                </p>
              </div>
              <div>
                <p className="fdFormularioSubtitulo">Buscador</p>
              </div>
            </div>
          </div>
          <div className="fdContenedorDeplegables">
            <Row>
              <Col>
                <DesplegableDestinos
                  nombre={"Pais"}
                  oUno={"Colombia"}
                  oDos={"Venezuela"}
                  oTres={"Ecuador"}
                ></DesplegableDestinos>
              </Col>
              <Col>
                <DesplegableDestinos
                  size="lg"
                  nombre={"Programa Académico"}
                  oUno={"Licenciatura"}
                  oDos={"Ingenieria"}
                  oTres={"Derecho"}
                ></DesplegableDestinos>
              </Col>
            </Row>
            <Row>
              <Col>
                <DesplegableDestinos
                  nombre={"Institucion social / Campus"}
                  oUno={"Sede Cuatro vientos"}
                  oDos={"Sede ternera"}
                ></DesplegableDestinos>
              </Col>
              <Col>
                <DesplegableDestinos
                  nombre={"Tipo de Convenio"}
                  oUno={"Uno"}
                  oDos={"Dos"}
                  oTres={"Tres"}
                ></DesplegableDestinos>
              </Col>
            </Row>
          </div>
          <div className="fdContBotonImagen">
            <Row>
              <Col sm></Col>
              <Col sm className="dfColBoton2">
                <Link className="btnFDBuscar" to="/Destinos/Buscar">
                  <FaSearch />
                  <p>Buscar</p>
                </Link>
              </Col>
              <Col sm className="dfColBoton3">
                <img
                  className=""
                  src={imgfondoBuscar}
                  alt="Fondo de visitantes de otros paises"
                  width={180}
                  height={210}
                ></img>
              </Col>
            </Row>
          </div>
          <div className="fdFooter">
            <p>Copyright © 2025 Todos los derechos reservados</p>
          </div>
        </Form>
      </Container>
    );
}