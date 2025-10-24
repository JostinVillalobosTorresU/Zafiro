import "./QueHacerS4.css";
import { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image';

let contadorGlobal = 0; //Variable para el contador

{"Este componente crea las 'Cartas' de seccion de ¿Que debes hacer? de la pagina de movilidad saliente"}
export function QueHacerS4 ({img, titulo, textoP, subTitulo, listas}) {

  const [numeroQH, setNumero] = useState(0);

  useEffect(() => {
    contadorGlobal++;
    setNumero(contadorGlobal);
    return () => contadorGlobal--; // si se desmonta, resta 1
  }, []);

  return (
    <>
      <div className="contQhS4Carta">
        <div className="card m-2 qhS4Carta">
          <div className="constenedorImgCartaS4">
            <Image src={img} className="imgCartaQHS4" />
          </div>
          <div className="contTextoQHS4">
            <div className="card-body cuerpoTextoQHS4">
              <div className="row">
                <h4 className="qhS4Numero text-center col-ms">{numeroQH}</h4>
                <h4 className="qhS4CartaTitulo col">{titulo}</h4>
              </div>
              <div className="contCartaTextoQHS4">
                <p className="qhS4Texto">{textoP}</p>
                <br />
                <p className="">{subTitulo}</p>
                <ul className="qhS4Lista">
                  {listas.map((lista, i) => (
                    <li key={i}>{lista}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}