import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrincipalPc } from "./paginas/PrincipalPc"
import { Buscar } from "./paginas/Buscar";
import { MovilidadesS } from "./paginas/MovilidadSaliente";
import { MovilidadesE } from "./paginas/Movilidadentrante";
import { Destinos } from "./paginas/Destinos";
import { Login } from "./paginas/Login";
import { DescubreComo } from "./paginas/DescubreComo";

export function App () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrincipalPc />} />
          <Route path="/Buscar" element={<Buscar />} />
          <Route path="/Movilidades-entrante" element={<MovilidadesE />} />
          <Route path="/Movilidades-saliente" element={<MovilidadesS />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/Log-in" element={<Login />} />
          <Route path="/Sobre-nosotros" element={<Buscar />} />
          <Route path="/Descubre-como" element={<DescubreComo />} />

        </Routes>
      </BrowserRouter>
    );

}