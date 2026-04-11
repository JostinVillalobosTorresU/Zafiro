import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HeaderRegistros } from '../../componentes/HeaderRegistros';
import  hRImg from "../../img/RegistroDocente.png";
import { RiUploadCloud2Line } from "react-icons/ri";
import countries from "i18n-iso-countries";
import esLocale from "i18n-iso-countries/langs/es.json";
import ciuMuni from "../../data/co.json";
import "./RegistroDocente.css";

export function RegistroDocente () {
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

  /*Pais */
  const [pais, setPais] = useState("");
    countries.registerLocale(esLocale);
    const listaPaises = Object.values(
      countries.getNames("es", { select: "official" }),
    ).sort();

  /*EPS*/
  const EPS = ["Sanitas","Sura","Coomeva","Nueva","Coomeva","Salud Total","Comfenalco","Coosalud", "SOS", "Mutual SER",
     "Compensar", "Famisanar"];

  return (
    <>
      <HeaderRegistros imagen={hRImg}></HeaderRegistros>
      <Container fluid className="contRD">
        <Container fluid className="contFormRD">
          <Form
            className="formRD"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <h1 className="text-uppercase text-center fw-light mt-2 mb-5">
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
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control type="text" placeholder="" required />
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
            <Form.Group className="mb-3" controlId="validationCustom05">
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
            <Form.Group className="mb-3" controlId="validationCustom09">
              <Form.Label>Direccion</Form.Label>
              <Form.Control placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese una direccion.
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
            <Form.Group className="mb-3" controlId="validationCustom11">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un Numero de telefono.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom12">
              <Form.Label>E-mail institucional</Form.Label>
              <Form.Control type="email" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un correo electronico institucional.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationCustom13">
              <Form.Label>E-mail personal</Form.Label>
              <Form.Control type="email" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un correo electronico personal.
              </Form.Control.Feedback>
            </Form.Group>
            <div className="rDupload-container">
              <Form.Label>Adjuntar hoja de vida</Form.Label>
              <label htmlFor="fileInput" className="rDupload-box">
                <input
                  type="file"
                  id="fileInput"
                  className="form-control rDinput-file"
                  required
                />
                <div className="rDupload-content">
                  <RiUploadCloud2Line className="rDicon" />
                </div>
              </label>
              <div class="invalid-feedback">
                Example invalid form file feedback
              </div>
            </div>
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