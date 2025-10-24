import { Container } from "react-bootstrap";
import "./MovilidadSaliente.css";
import { Seccion1MS } from "./Seccion1MS"
import { Seccion2R } from "./Seccion2R";
import { Seccion3TMS } from "./Seccion3TMS";
import { Seccion4QH } from "./Seccion4QH";
import { Footer } from "../../componentes/Footer";

export function MovilidadesS () {
    return (
        <>
            <Container fluid className="contenedorSeccion1MS">
                <Seccion1MS></Seccion1MS>
            </Container>
            <Container fluid className="contenedorSeccion2R">
                <Seccion2R></Seccion2R>
            </Container>
            <Container fluid className="contenedorSeccion3TMS">
                <Seccion3TMS></Seccion3TMS>
            </Container>
            <Container fluid className="contenedorSeccion4QH">
                <Seccion4QH></Seccion4QH>
            </Container>
            <Footer></Footer>
        </>
        
    )
}