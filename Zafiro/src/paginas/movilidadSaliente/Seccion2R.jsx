import "./Seccion2R.css"

export function Seccion2R () {
    return (
      <>
        <div className="contenedorContSeccion2R">
          <h2 className="tituloSeccion2R">Requisitos</h2>
          <div className="contenedorRequisitosS2R">
            <div>
              <p className="numeroRequisitoS2R">01</p>
              <p className="textoRequisitoS2R">
                Estar matriculado en UNICOLOMBO
              </p>
            </div>
            <div>
              <p className="numeroRequisitoS2R">02</p>
              <p className="textoRequisitoS2R">
                Haber cursado mínimo 40% de créditos del programa
              </p>
            </div>
            <div>
              <p className="numeroRequisitoS2R">03</p>
              <p className="textoRequisitoS2R">Promedio acumulado ≥ 3.5</p>
            </div>
            <div>
              <p className="numeroRequisitoS2R">04</p>
              <div>
                <p className="textoRequisitoS2R">Documentos obligatorios:</p>
              <ul>
                <li>Formato SGC-GRI-F14 (Solicitud movilidad saliente)</li>
                <li>Copia de cédula (nacional) o pasaporte (internacional)</li>
                <li>
                  Certificado EPS vigente (seguro internacional para movilidad
                  exterior)
                </li>
                <li>Formato SGC-GRI-F13 (Compromiso estudiante/padres)</li>
                <li>Certificado Gravindex (últimos 15 días)</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}