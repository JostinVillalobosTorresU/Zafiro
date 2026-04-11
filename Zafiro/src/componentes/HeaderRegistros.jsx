import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../img/UnicLogo.png";
import "./HeaderRegistros.css";

export function HeaderRegistros ({imagen}) {
    return (
      <Navbar className="m-0 p-0 w-100 navHR">
        <Container fluid className="contHRNavbar">
          <NavLink to="/" className="aRNavImg">
            <img
              alt="Imagen de Logo de la Fundacion universitaria colombo internacional"
              src={logo}
              width="100"
              height="30"
              className="hRImg"
              id="hRLogoUnicolombo"
            />
          </NavLink>
          <Container fluid className="p-0 m-0 hRcontimgCabecera">
            <img
              alt="Imagen header registro docente"
              src={imagen}
              width="110"
              height="80"
              className="hRImg"
              id="hRimgCabecera"
            />
          </Container>
        </Container>
      </Navbar>
    );
}