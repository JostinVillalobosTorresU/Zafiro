import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer () {
    return (
        <footer className="footer">
      {/* Onda SVG decorativa */}
      <div className="footer-wave">
        <svg viewBox="0 0 1040 280" preserveAspectRatio="none">
          <path
            d="M0,32L34.3,64C68.6,96,137,160,206,176C274.3,192,343,160,411,122.7C480,85,549,43,617,69.3C685.7,96,754,192,823,229.3C891.4,267,960,245,1029,213.3C1097.1,181,1166,139,1234,117.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            fill="#72AEE6"
          />
        </svg>
      </div>

      <div className="footer-content">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs="auto">
            <Link to='https://www.facebook.com/unicolomboctg'><FaFacebookF className="social-icon" /></Link>
            <Link to='https://www.instagram.com/unicolomboctg/'><FaInstagram className="social-icon" /></Link>
            <Link to='https://www.tiktok.com/@unicolomboctg'><FaTiktok className="social-icon" /></Link>
            </Col>
          </Row>

          <Row className="justify-content-center text-center mt-3">
            <Col xs="auto">

              <Link to="/Movilidades-entrante" className="footer-link">Movilidad Entrante</Link>
              <Link to="/Movilidades-saliente" className="footer-link">Movilidad Saliente</Link>
              <Link to="/Destinos" className="footer-link">Destinos</Link>
              <Link to="/Sobre-Nosotros" className="footer-link">Sobre Nosotros</Link>
            </Col>
          </Row>

          <Row className="justify-content-center text-center mt-3">
            <Col xs="auto">
              <p className="copyright">Copyright © 2025 Todos los derechos reservados</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
    );
}