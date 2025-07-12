import { SlArrowRight } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

import './BtnSesion.css'
import { Link } from 'react-router-dom';


export function BtnSesion (isLog) {
    {/*Para cabiar el stade del botont*/}
    const texto = isLog ? 'Ingresar' : <FaUser /> 

    return (
        <Link className='Bsesion' to='/Log-in'>{texto}<SlArrowRight /></Link>
    );
}