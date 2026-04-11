import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrincipalPc } from "./paginas/paginaPrincipal/PrincipalPc"
import { Buscar } from "./paginas/Buscar/Buscar";
import { MovilidadesS } from "./paginas/movilidadSaliente/MovilidadSaliente";
import { MovilidadesE } from "./paginas/movilidadEntrante/Movilidadentrante";
import { Destinos } from "./paginas/Destinos/Destinos";
import { Login } from "./paginas/Login/Login";
import { RegistrateAqui1 } from "./paginas/Login/RegistrateAqui1";
import { RegistroDocente } from "./paginas/Login/RegistroDocente";
import { DescubreComo } from "./paginas/DescubreComo/DescubreComo";
import { REstudiantesSalientes } from "./paginas/Login/Registro_estudiantesSalientes";
import ScrollToTop from "./componentes/ScrollToTop";


export function App () {
    return (
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<PrincipalPc />} />
          <Route path="/Destinos/Buscar" element={<Buscar />} />
          <Route path="/Movilidades-entrante" element={<MovilidadesE />} />
          <Route path="/Movilidades-saliente" element={<MovilidadesS />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/Log-in" element={<Login />} />
          <Route path="/Registra-aqui" element={<RegistrateAqui1/>} />
          <Route path="/Registro-docente" element={<RegistroDocente/>} />
          <Route path="/Registro-estudiante-saliente" element={<REstudiantesSalientes/>} />
          <Route path="/Descubre-como" element={<DescubreComo />} />
        </Routes>
      </BrowserRouter>
    );

}