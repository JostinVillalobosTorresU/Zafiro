import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrincipalPc } from "./paginas/paginaPrincipal/PrincipalPc"
import { Buscar } from "./paginas/Buscar/Buscar";
import { MovilidadesS } from "./paginas/movilidadSaliente/MovilidadSaliente";
import { MovilidadesE } from "./paginas/movilidadEntrante/Movilidadentrante";
import { Destinos } from "./paginas/Destinos/Destinos";
import { Login } from "./paginas/Login/Login";
import { DescubreComo } from "./paginas/DescubreComo/DescubreComo";

export function App () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrincipalPc />} />
          <Route path="/Destinos/Buscar" element={<Buscar />} />
          <Route path="/Movilidades-entrante" element={<MovilidadesE />} />
          <Route path="/Movilidades-saliente" element={<MovilidadesS />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/Log-in" element={<Login />} />
          <Route path="/Descubre-como" element={<DescubreComo />} />

        </Routes>
      </BrowserRouter>
    );

}