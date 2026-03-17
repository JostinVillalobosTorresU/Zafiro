import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import raqui1 from "../../img/RegistrateAqui1.png";
import raqui2 from "../../img/RegistrateAqui2.png";
import raqui3 from "../../img/RegistrateAqui3.png";
import { FaArrowLeft } from "react-icons/fa";
import './RegistrateAqui1.css';

export function RegistrateAqui1 () {
    return (
        <Container fluid className='contRegistrateAqui'>
            <Container fluid className='contARbuttonExit'><Link to="/Log-in" className='ARMobilebuttonExit'><FaArrowLeft/></Link></Container>
            <Container fluid className='contTextRA'>
                <h1>Bienvenido</h1>
                <p>Seleccione el usuario con el que se desea registrar</p>
            </Container>
            <Container fluid className='contARLinks'>
                <Link to="/Registrar-aqui-docente" className='contImgLinks'>
                    <img src={raqui1} alt="ra-Imagen_de_fondo" className='ARBackImg' />
                    <img src={raqui2} alt="ra-Imagen_de_docentes" className='ARFrontImg' />
                </Link>
                <Link className='contImgLinks'>
                    <img src={raqui1} alt="ra-Imagen_de_fondo" className='ARBackImg' />
                    <img src={raqui3} alt="ra-Imagen_de_estudiantes" className='ARFrontImg' />
                </Link>
            </Container>
        </Container>
    )
}