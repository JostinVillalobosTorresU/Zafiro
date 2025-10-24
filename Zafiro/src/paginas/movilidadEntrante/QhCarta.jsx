import './QhCarta.css';

export function QhCarta () {
    return (
      <>
        <div className="contQhCarta">
          <div className="card mb-3 qhCarta">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="qhFondo1"></div>
              </div>
              <div className="col-md-8 contTextoQH">
                <div className="card-body cuerpoTextoQH">
                  <div className='row'>
                    <h4 className="qhNumero text-center col-md-auto">1</h4>
                    <h4 className="qhCartaTitulo col">Tu universidad envía la solicitud</h4>
                  </div>
                  <div className='contCartaTextoQH'>
                    <p className='qhTexto'>Tu universidad de origen (aliada de UNICOLOMBO) envía una solicitud formal a nuestra 
                      Coordinación de Relaciones Interinstitucionales, indicando tu interés en realizar movilidad. <br />Recuerda:
                      </p><ul className='qhLista'>
                        <li>Verifica que tu universidad tenga convenio activo con UNICOLOMBO.</li>
                        <li>Asegúrate de que tu institución envíe:</li>
                        <li>Carta de nominación (con tus datos y periodo de movilidad).</li>
                        <li>Tu información académica (ej: récord de notas, nivel de idiomas).</li></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contQhCarta">
          <div className="card mb-3 qhCarta">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="qhFondo2"></div>
              </div>
              <div className="col-md-8 contTextoQH">
                <div className="card-body cuerpoTextoQH">
                  <div className='row'>
                    <h4 className="qhNumero text-center col-md-auto">2</h4>
                    <h4 className="qhCartaTitulo col">Revisión de perfil y documentación</h4>
                  </div>
                  <div className='contCartaTextoQH'>
                    <p className='qhTexto'>
                      <ul className='qhLista'>
                        <li>Requisitos académicos: Promedio, avance en tu carrera, y compatibilidad con nuestros programas.</li>
                        <li>Documentos:</li>
                        <li>Formato*SGC-GRI-F03*(llenado por tu universidad).</li>
                        <li>Copia de pasaporte (vigente).</li>
                        <li>Seguro médico internacional (obligatorio).</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contQhCarta">
          <div className="card mb-3 qhCarta">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="qhFondo3"></div>
              </div>
              <div className="col-md-8 contTextoQH">
                <div className="card-body cuerpoTextoQH">
                  <div className='row'>
                    <h4 className="qhNumero text-center col-md-auto">3</h4>
                    <h4 className="qhCartaTitulo col">Carta de aceptación</h4>
                  </div>
                  <div className='contCartaTextoQH'>
                    <p className='qhTexto'></p>
                    <ul className='qhLista'>
                        <li>Recibirás un correo oficial con:
                          <ul className='qhLista'>
                            <li>Carta de aceptación(para trámites migratorios).</li>
                            <li>Instrucciones detalladas para tu visa de estudiante (si aplica).</li>
                            <li>Información sobre alojamiento, transporte y bienvenida en Cartagena.</li>
                          </ul>
                        </li>
                        <li>Importante:</li>
                        Esta carta incluirá las fechas exactas de tu movilidad. Guárdala para presentarla en Migración Colombia al ingresar al país.
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contQhCarta">
          <div className="card mb-3 qhCarta">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="qhFondo4"></div>
              </div>
              <div className="col-md-8 contTextoQH">
                <div className="card-body cuerpoTextoQH">
                  <div className='row'>
                    <h5 className="qhNumero text-center col-md-auto">4</h5>
                    <h5 className="qhCartaTitul col">Apoyo para tu llegada a Colombia</h5>
                  </div>
                  <div className='contCartaTextoQH'>
                    <p className='qhTexto'></p>
                    <ul className='qhLista'>
                      <li>Recepción en Cartagena:
                        <ul className='qhLista'>
                          <li>Recogida en el aeropuerto (opcional).</li>
                          <li>Inducción presencial (tour por la universidad, registro académico, SIM card colombiana).</li>
                        </ul>
                      </li>
                      <li>
                        Soporte continuo:
                        <ul className='qhLista'>
                          <li>Asesoría en renovación de visa (si tu estadía supera 3 meses).</li>
                          <li>Conexión con mentores estudiantiles para adaptación.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
}