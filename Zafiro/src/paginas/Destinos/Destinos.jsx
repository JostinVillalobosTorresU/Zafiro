import { Container } from "react-bootstrap";
import {Header} from "../../componentes/Header";

import "./Destinos.css";
import { FormularioDestinos } from "./FormularioDestinos";

export function Destinos () {
    return (
      <>
        <Container fluid className="dCuerpo">
          <Header></Header>
          
          <Container fluid className="dContenedorFondo">
            <div className="dFondoAzul">
              <div className="dFondo1"></div>
              <FormularioDestinos></FormularioDestinos>
            </div>
          </Container>
          <Container fluid className="dContenedorFondo2">
            <div className="dFondo2"></div>
          </Container>
        </Container>
        
      </>
    );
}