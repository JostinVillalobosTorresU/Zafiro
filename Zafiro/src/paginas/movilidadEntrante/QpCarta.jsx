import './QpCarta.css';

export function QpCarta () {
    return (
      <>
        <div className="qpCarta">
          <div className="qpFondo1 d-flex align-items-end">
            <div className="card-text">
              <h3>Estudiante</h3>
              <p>De pregrado o posgrado de instituciones aliadas</p>
            </div>
          </div>
        </div>
        <div className="qpCarta">
          <div className="qpFondo2 d-flex align-items-end">
            <div className="card-text">
              <h3>Docentes e Investigadores</h3>
              <p>invitados para cátedras o colaboraciones</p>
            </div>
          </div>
        </div>
        <div className="qpCarta">
          <div className="qpFondo3 d-flex align-items-end">
            <div className="card-text">
              <h3>Personal Administrativo</h3>
              <p>en pasantías formativas.</p>
            </div>
          </div>
        </div>
      </>
    );
}