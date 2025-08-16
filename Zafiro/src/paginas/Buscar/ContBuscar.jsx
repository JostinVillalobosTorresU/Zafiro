import logo from "../../img/UnicLogo.png";
import { BtnBuscar } from "./BtnBuscar";
import { Mapa } from "../../componentes/Mapa";

import "./ContBuscar.css"
import { TbMapCancel } from "react-icons/tb";

export function ContBuscar() {
  return (
    <div className="z-1 position-absolute top-50 start-50 translate-middle buscarContenido">
      <header className="d-flex buscarCabecera">
        <img
          src={logo}
          alt="Logo de la Fundacion Universitaria Colombo Internacional"
        />
        <div className="separador-vertical"></div>
        <p className="flex-grow-1 fs-1">Movilidades Academicas</p>
      </header>
      <div className="contmapa ">
        <div className="cBtnBusq">
          <BtnBuscar textoB="Modifica Busqueda"></BtnBuscar>
        </div>
        
        <Mapa></Mapa>
        <hr></hr>
        <div className="contCancelMap">
          <div className="segundo">
            <TbMapCancel className="fs-1 fw-lighter"/>
            <p>Especificaciones no encontradas por favor intentelo nuevamente con otras opciones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
