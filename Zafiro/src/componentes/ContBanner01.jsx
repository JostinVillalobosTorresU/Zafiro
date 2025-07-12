import "./ContBanner01.css"
import fondoImg from "../img/pa06.png";

import { FaArrowRightLong } from "react-icons/fa6";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ContBanner01 () {
    return (
      <div className="banner-container">
        <Row fluid className="g-0 columna">
          <div className="text-section d-flex align-items-center justify-content-center">
            <div className="text-content">
              <h1>Vive una Experiencia Universitaria Única</h1>
              <p>
                Descubre el mundo a través de nuestros programas de intercambio
                universitario. Amplía tus horizontes, conoce nuevas culturas y
                haz amigos internacionales.
              </p>
              <p className="linkanimate">
                <Link 
                className="link-light link-underline link-underline-opacity-0"
                  to="/Destinos">
                    Descubre Destinos  <FaArrowRightLong />
                </Link>
              </p>
            </div>
          </div>
          <Col md={5}></Col>

          <Col md={7} className="image-section">
            <img
              src={fondoImg}
              alt="Fondo"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Col>
        </Row>
      </div>
    );
}