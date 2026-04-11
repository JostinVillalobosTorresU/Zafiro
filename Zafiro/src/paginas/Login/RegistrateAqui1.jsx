import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import raqui1 from "../../img/RegistrateAqui1.png";
import raqui2 from "../../img/RegistrateAqui2.png";
import raqui3 from "../../img/RegistrateAqui3.png";
import logo from "../../img/UnicLogo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './RegistrateAqui1.css';

export function RegistrateAqui1 () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <Container fluid className="contRegistrateAqui">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className=""
          size="lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="contARModalImgTexto">
            <img
              src={logo}
              alt="Logo de la Fundacion Universitaria Colombo Internacional"
            />
            <h2>Registro para docentes</h2>
            <p>
              Ingrese el código de validación proporcionado por la universidad
            </p>
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className='fw-semibold'>Codigo de docente</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese el codigo de seguridad"
                  autoFocus
                />
              </Form.Group>
            </Form>
            <Button className='w-100' variant="primary">Validar Código</Button>
            <Button className='w-100' variant="danger" onClick={handleClose}>
              Volver
            </Button>
          </Modal.Body>
          <Modal.Footer >
            
          </Modal.Footer>
        </Modal>
        <Container fluid className="contARbuttonExit">
          <Link to="/Log-in" className="ARMobilebuttonExit">
            <FaArrowLeft />
          </Link>
        </Container>
        <Container fluid className="contTextRA">
          <h1>Bienvenido</h1>
          <p>Seleccione el usuario con el que se desea registrar</p>
        </Container>
        <Container fluid className="contARLinks">
          <Link onClick={handleShow} className="contImgLinks">
            <img src={raqui1} alt="ra-Imagen_de_fondo" className="ARBackImg" />
            <img
              src={raqui2}
              alt="ra-Imagen_de_docentes"
              className="ARFrontImg"
            />
          </Link>
          <Link className="contImgLinks">
            <img src={raqui1} alt="ra-Imagen_de_fondo" className="ARBackImg" />
            <img
              src={raqui3}
              alt="ra-Imagen_de_estudiantes"
              className="ARFrontImg"
            />
          </Link>
        </Container>
      </Container>
    );
}