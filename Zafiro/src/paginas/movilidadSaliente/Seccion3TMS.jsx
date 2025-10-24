import Image from 'react-bootstrap/Image';
import { TiposMS } from './TiposMS';
import imgTMD from "../../img/imgTMD.png";
import "./Seccion3TMS.css";

export function Seccion3TMS () {
    return (
      <>
      <div className='contenedorSeccion3TMS'>
        <div className='contenedorTituloSeccion3TMS'>
          <h2>Tipos de Movilidad Saliente</h2>
        </div>
        <div className='contenedorImgTiposMS'>
          <div className='contenedorImgTMS'>
            <Image src={imgTMD} className="imgSeccion3TMS" rounded />
          </div>
          <div className='contenedorTMS'>
            <TiposMS
              numero={"1"}
              titulo={"Intercambio Académico (semestral/anual):"}
              tipoUno={"Cursas materias en una universidad aliada"}
              tipoDos={"Homologación garantizada (previo aval académico)"}
            ></TiposMS>
            <TiposMS
              numero={"2"}
              titulo={"Estancias Cortas (1 día a 3 meses):"}
              tipoUno={"Rutas académicas (ej: tour por empresas en Alemania)"}
              tipoDos={"Inmersiones culturales (ej: curso de idiomas en Canadá)"}
            ></TiposMS>
            <TiposMS
              numero={"3"}
              titulo={"Prácticas Internacionales"}
              tipoUno={"Convenios con empresas y ONGs en el exterior"}
            ></TiposMS>
          </div>
        </div>
      </div>
      </>
    );
}