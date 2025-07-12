import { Container } from "react-bootstrap"
import { Header } from "../componentes/Header"
import { ContBuscar } from "../componentes/ContBuscar"

import './Buscar.css'

export function Buscar () {
    return (
        <>
            <Header></Header>
            <ContBuscar></ContBuscar>
            <Container fluid className="contenedorBuscar">
                <div className="z-0 bgimgb01"></div>
                <div className="z-0 bgimgb02"></div>    
            </Container>
        </>
    )
}