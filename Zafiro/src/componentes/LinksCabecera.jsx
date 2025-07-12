import './LinkCabecera.css';
import { NavLink } from 'react-router-dom';

export function LinksCabecera ({redireccion, texto}) {
    return (
        <NavLink className='linkC' to={redireccion}>{texto}</NavLink>
    );
    
}