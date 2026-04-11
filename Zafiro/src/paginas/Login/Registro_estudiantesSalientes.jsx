import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiUploadCloud2Line } from "react-icons/ri";
import { HeaderRegistros } from "../../componentes/HeaderRegistros";
import countries from "i18n-iso-countries";
import esLocale from "i18n-iso-countries/langs/es.json";
import hRSS from "../../img/RegistrarEstudiantesSaliente.png";
import ciuMuni from "../../data/co.json";
import "./Registro_estudiantesSalientes.css";

export function REstudiantesSalientes() {
  /*Validacion del formulario */
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  /*Pais*/
  const [pais, setPais] = useState("");
  countries.registerLocale(esLocale);
  const listaPaises = Object.values(
    countries.getNames("es", { select: "official" }),
  ).sort();

  /*EPS*/
  const EPS = [
    "Sanitas",
    "Sura",
    "Coomeva",
    "Nueva",
    "Coomeva",
    "Salud Total",
    "Comfenalco",
    "Coosalud",
    "SOS",
    "Mutual SER",
    "Compensar",
    "Famisanar",
  ];
  return (
    <>
      <HeaderRegistros imagen={hRSS}></HeaderRegistros>
      <Container fluid className="contRES">
        <Container fluid className="contFormRES">
          <Form
            className="formRES"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            {/*Primer bloque del formulario*/}
            <Container fluid className="contPartFormRES mb-3 mt-3">
              <h1 className="fw-medium text-center fw-light mt-2 mb-5">
                Datos personales
              </h1>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Tipo de documento de identidad</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option></option>
                  <option value="1">Tarjenta de identidad</option>
                  <option value="2">Cédula de Ciudadanía</option>
                  <option value="3">Pasaporte</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un tipo de documento de identidad.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom04">
                <Form.Label>Numero de documento</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom05">
                <Form.Label>Sexo</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option></option>
                  <option value="1">Femenino.</option>
                  <option value="2">Masculino.</option>
                  <option value="3">Otro.</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un sexo.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FechaNacimiento">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  min={"1920-01-01"}
                  max={"2200-01-01"}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="LugarDeNacimiento">
                <Form.Label>Lugar de nacimiento</Form.Label>
                <Form.Control type="text" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="paisNacimiento">
                <Form.Label>Pais de nacimiento</Form.Label>
                <Form.Select
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  required
                >
                  <option></option>
                  {listaPaises.map((p, index) => (
                    <option key={index} value={p}>
                      {p}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su pais de nacimiento.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="GrupoSanguineo">
                <Form.Label>Grupo sanguineo</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option></option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">AB</option>
                  <option value="3">O</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un grupo sanguineo.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FactorRH">
                <Form.Label>Factor RH</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option></option>
                  <option value="1">+</option>
                  <option value="2">-</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un factor RH.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="EPS">
                <Form.Label>EPS</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  {EPS.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Direccion">
                <Form.Label>Direccion</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor su direccion.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="CudadMunicipio">
                <Form.Label>Ciudad/Municipio</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option></option>
                  {ciuMuni.map((mu, indexciu) => (
                    <option key={indexciu} value={mu.city}>
                      {mu.city}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su ciudad o municipio.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su numero de telefono.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Celular">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su numero de telefono celular.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmailIns">
                <Form.Label>E-mail institucional</Form.Label>
                <Form.Control type="email" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un correo electronico institucional.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="EmailPersonal">
                <Form.Label>E-mail personal</Form.Label>
                <Form.Control type="email" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un correo electronico personal.
                </Form.Control.Feedback>
              </Form.Group>
            </Container>

            {/*Segundo bloque del formulario*/}
            <Container fluid className="contPartFormRES mb-3 mt-3">
              <h2>Infromacion academica</h2>
              <Form.Group className="mb-3" controlId="ProgramaAcademico">
                <Form.Label>Programa academico en Unicolombo</Form.Label>
                <Form.Control placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un programa academico.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="NivelSemestre">
                <Form.Label>Semestre</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese el semestre en el que se encuentra.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="PromedioA">
                <Form.Label>Promedio acumulado</Form.Label>
                <Form.Control type="number" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su promedio acumulado.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="CodigoEstudiantil">
                <Form.Label>Codigo estudiantil</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese su codigo estudiantil.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Idiomas">
                <Form.Label>Idiomas que maneja</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese los idiomas que maneja.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="NivelIdiomas">
                <Form.Label>Nivel de idioma</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese los idiomas que maneja.
                </Form.Control.Feedback>
              </Form.Group>
            </Container>

            {/*Tercer bloque del formulario*/}
            <Container fluid className="contPartFormRES mb-3 mt-3">
              <h2>Motivacion del estudiante</h2>
              <Form.Group className="mb-3" controlId="validationCustom11">
                <Form.Label>
                  Explique sus razones para participar en el programa de
                  intercambio
                </Form.Label>
                <Form.Control as="textarea" rows={7} />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese los idiomas que maneja.
                </Form.Control.Feedback>
              </Form.Group>
            </Container>

            {/*Cuarto bloque del formulario*/}
            <Container fluid className="contPartFormRES mb-3 mt-3">
              <h2>Universidad anfitriona</h2>
              <Form.Group className="mb-3" controlId="validationCustom10">
                <Form.Label>Ciudad/Municipio</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una ciudad o municipio.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom11">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un Numero de telefono.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom10">
                <Form.Label>Ciudad/Municipio</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una ciudad o municipio.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom11">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un Numero de telefono.
                </Form.Control.Feedback>
              </Form.Group>
            </Container>
            <div className="contBotonesRD">
              <a
                className="btn btn-danger rDbotones"
                to="/Registra-aqui"
                role="button"
              >
                Salir
              </a>
              <Button variant="primary" type="submit" className="rDbotones">
                Registrar
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </>
  );
}