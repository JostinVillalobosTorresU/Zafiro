import "./SeccionME.css";
import student from "../../img/EstudianteSME.png";
import { Container } from "react-bootstrap";

export function SeccionME () {
    return (
      <section className="contenedorSme">
        {/* Encabezado con franja */}

        <Container fluid className="contenedorOndasMe">
          <div className="ondaME1">
            <h1 className="SMETittulo">¿Que es la Movilidad Entrante?</h1>
          </div>
          <div className="ondaME2"></div>
          <div className="ondaME3"></div>
        </Container>
        {/* Contenido principal */}
        <div className="contenedorContMe">
          <div className="TextoME">
            <p>
              La Movilidad Entrante en UNICOLOMBO es una oportunidad para que
              estudiantes, docentes e investigadores de universidades nacionales
              e internacionales vivan una experiencia académica y cultural en
              nuestra institución. Podrás cursar asignaturas, participar en
              proyectos de investigación, realizar prácticas profesionales o
              asistir a eventos académicos, todo ello en el marco de nuestros
              convenios de cooperación.
            </p>
          </div>
          <div className="imagenesME">
            <div className="CirculoME"></div>
            <img src={student} alt="EstudianteME" />
            <svg className="trianguloME"
              viewBox="0 0 16 16"
              height={180}
              width={180}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              transform="rotate(90)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#005AA985"
                  d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </section>
    );
}