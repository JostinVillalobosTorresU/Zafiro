import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../img/UnicLogo.png';

import { BtnSesion } from './BtnSesion';
import './Header.css';
import { LinksCabecera } from './LinksCabecera';
import { NavLink } from 'react-router-dom';

export function Header () {
    return (
        <Navbar expand="lg" fixed="top" className="cabecera">
            <Container fluid className='contenedor'>
                <NavLink to='/'>
                    <img
                    alt="Imagen de Logo de la Fundacion universitaria colombo internacional"
                    src={logo}
                    width="100"
                    height="30"
                    className="d-inline-block align-top"
                    />
                </NavLink>
                <Navbar.Toggle className='ms-auto' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <>
                            <LinksCabecera redireccion={"/Movilidades-entrante"} texto={"Movilidad entrante"}/>
                            <LinksCabecera redireccion={"/Movilidades-saliente"} texto={"Movilidad salientes"}/>
                            <LinksCabecera redireccion={"/Destinos"} texto={"Destinos"}/>
                            <LinksCabecera redireccion={"/Convenios"} texto={"Convenios"}/>
                            <LinksCabecera redireccion={"/Sobre-Nosotros"} texto={"Sobre Nosotros"}/>
                            <BtnSesion isLog={false}></BtnSesion>
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}