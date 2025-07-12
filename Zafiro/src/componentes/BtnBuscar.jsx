import Button from 'react-bootstrap/Button';

import { FaSearch } from "react-icons/fa";

import './BtnBuscar.css';


export function BtnBuscar ({textoB}) {

    return (
        <Button href='/#' className='BBuscar'><FaSearch /> {textoB}</Button>
    );
}