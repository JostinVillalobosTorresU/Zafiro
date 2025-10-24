import "./TiposMS.css";

export function TiposMS ({numero, titulo, tipoUno, tipoDos}) {
    return (
      <>
        <div className="contenedorTiposMS">
          <div className="contenedorIndicadormunericoTMS">
            <svg
              className="FiguraTMS"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L30 12L58.5 0V52L30 70L0 52V0Z" fill="#005AA9" />
              <text
                x="30"
                y="40"
                fill="white"
                fontSize="40"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {numero}
              </text>
            </svg>
          </div>
          <div className="contenedorInfoTMS">
            <h3 className="tituloTipoMS">{titulo}</h3>
            <div className="contenedorListasTiposMS">
              <ul className="ListaTiposMS">
                <li className="itenTiposMS">{tipoUno}</li>
                {tipoDos ? <li className="itenTiposMS">{tipoDos}</li> : ""}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}