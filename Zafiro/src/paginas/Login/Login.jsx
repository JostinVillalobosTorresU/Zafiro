import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import logo from "../../img/UnicLogo.png";

import './Login.css'

export function Login () {
    return (
      <Container fluid className="bodyLogin">
        <Form className="cuerpoForm">
          <div className="contImgTitulo">
            <div className="cuerpoImgLg">
              <img
                src={logo}
                alt="Logo de la Fundacion Universitaria Colombo Internacional"
              />
            </div>
            <div >
              <p className="LgTitulo"> Portal de Intercambio Universitario</p>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Correo Electronico</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label> Constraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mostrar Contraseña" />
          </Form.Group>
          <Button className="col-12" variant="primary" type="submit">
            Iniciar Sesion
          </Button>
          <div className="contLinksRegistro">
            <div className="contLinkRegistro1">
              <Link
                className="link-primary link-underline link-underline-opacity-100" to="/">
                ¿Olvidaste tu contraseña?</Link>
            </div>
            <div className="contLinkRegistro2">
              <p>¿No tienes una cuenta? <Link
                className="link-primary link-underline link-underline-opacity-100"
                to="/">Registrate aqui</Link></p>
            </div>
          </div>
        </Form>
      </Container>
    );
}