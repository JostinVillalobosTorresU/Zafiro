import "./ContBanner01.css"
import fondoImg from "../../img/pa06.png";

import { FaArrowRightLong } from "react-icons/fa6";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ContBanner01 () {
    return (
      <div className="banner-container">
        <div className="columnab1">
          <div className="trianguloAzul">
            <svg viewBox="0 0 484 621" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M471.426 216.1C488.138 228.494 488.138 253.506 471.426 265.9L0.966461 614.81C-19.4904 629.981 -48.5 615.379 -48.5 589.91V-107.91C-48.5 -133.379 -19.4904 -147.981 0.966461 -132.81L471.426 216.1Z" fill="#005AA9"/>
              <foreignObject className="text-section" x="0" y="110">
                <div className="text-content" xmlns="http://www.w3.org/1999/xhtml">
                  <h1 className="carrusel1Titulo">Vive una Experiencia Universitaria Única</h1>
                  <p className="carrusel1Texto">Descubre el mundo a través de nuestros programas de intercambio universitario. Amplía tus horizontes, conoce nuevas culturas y haz amigos internacionales.</p>
                  <Link to="/Destinos" className="linkanimate link-light link-offset-2 link-underline-opacity-0">Explora Destinos <FaArrowRightLong></FaArrowRightLong> </Link>
                </div>
              </foreignObject>
            </svg>
          </div>
          <div className="image-section">
            <Image src={fondoImg}
              alt="Imagen de personas en la calle"
              className="imageBanner01"></Image>
          </div>
        </div>
      </div>
    );
}