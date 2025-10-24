import "./Seccion1MS.css";
import s1MS from "../../img/Seccion1MS.jpg";

export function Seccion1MS () {
    return (
      <>
        <div className="contenedorOndasMS">
          <div className="w-100 h-100 ondaMS1">
            <svg
              viewBox="0 0 779 205"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g>
                <title>Onda1y2</title>
                <path
                  id="svg_2"
                  fill="#005AA9"
                  d="m0,-1c0,51.9824 41.0365,101.836 114.082,138.593c73.045,36.757 172.116,57.407 275.418,57.407c103.302,0 202.373,-20.65 275.418,-57.407c73.045,-36.757 114.082,-86.6105 114.082,-138.59297l-389.5,-0.00003l-389.5,0z"
                />
                <path
                  id="svg_3"
                  fill="#EC1C24"
                  d="m0,-17.5c0,49.9933 41.0365,97.939 114.082,133.29c73.045,35.35 172.116,55.21 275.418,55.21c103.302,0 202.373,-19.86 275.418,-55.21c73.045,-35.351 114.082,-83.2967 114.082,-133.29l-389.5,0l-389.5,0z"
                />
              </g>

              <g>
                <title>Onda3</title>
                <path
                  d="m0,-30c0,49.065 41.0365,96.1205 114.082,130.815c73.045,34.694 172.116,54.185 275.418,54.185c103.302,0 202.373,-19.491 275.418,-54.185c73.045,-34.6945 114.082,-81.7499 114.082,-130.815l-389.5,0l-389.5,0z"
                  fill="white"
                  id="svg_1"
                />
              </g>
            </svg>
          </div>
          <div className="tituloOndasMS">
            <h1>¿Que es la Movilidad Saliente?</h1>
          </div>
        </div>

        <div className="row contenedorContImgTexto">
          <div className="col contenedorImgSeccion1MS">
            <img src={s1MS} alt="Imagen de estudiantes"/>
          </div>
          <div className="col contTextoSeccion1MS">
            <p>Es tu oportunidad de estudiar, investigar o realizar prácticas profesionales en universidades aliadas alrededor del mundo,
               mientras avanzas en tu carrera en UNICOLOMBO. Podrás:</p>
            <ul>
              <li>Cursar 1 o 2 semestres en el extranjero (Intercambio Académico)</li>
              <li>Participar en estancias cortas: rutas académicas, inmersiones culturales o congresos</li>
              <li>Realizar prácticas internacionales (según tu programa)</li>
            </ul>
          </div>
        </div>
      </>
    );
}