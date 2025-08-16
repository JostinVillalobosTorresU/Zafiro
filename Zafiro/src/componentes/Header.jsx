import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../img/UnicLogo.png";

import { BtnSesion } from "./BtnSesion";
import "./Header.css";
import { LinksCabecera } from "./LinksCabecera";
import { NavLink } from "react-router-dom";

{
  /*Header principal, componente donde se crea el Header(Cabecera) de las paginas
    
    Cuenta con dos contenedores, Navbar y container, dentro de ambos, cuenta con un logo que es un link, cinco links que son prop
     y un boton que es un prop */
}

export function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="cabecera">
      <Container fluid className="contenedor">
        <NavLink to="/">
          <img
            alt="Imagen de Logo de la Fundacion universitaria colombo internacional"
            src={logo}
            width="110"
            height="30"
            className="d-inline-block align-top"
          />
        </NavLink>
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <>
              {/*Links de la cabecera, direccionan hacia las paginas con su respectivo nombre pasandole 
                            la direccion y el nombre de la pagina a los parametros "redireccion" y "texto" respectivamente
                            
                            El NavLink es un link que direcciona a la pagina de Unicolombo "sobre nosotros
                            
                            ElBtnSesion (es un prop) es el boton para Sesion de usuario, cuenta como el parametro "isLog" para 
                            saber logicamente si el usuario esta logueado */}
              <LinksCabecera
                redireccion={"/Movilidades-entrante"}
                texto={"Movilidad entrante"}
              />
              <LinksCabecera
                redireccion={"/Movilidades-saliente"}
                texto={"Movilidad salientes"}
              />
              <LinksCabecera redireccion={"/Destinos"} texto={"Destinos"} />
              <LinksCabecera redireccion={"/Convenios"} texto={"Convenios"} />
              <NavLink
                className="linkC"
                to="https://unicolombo.edu.co/quienes-somos/"
              >
                Sobre Nosotros
              </NavLink>
              <BtnSesion isLog={false}></BtnSesion>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
