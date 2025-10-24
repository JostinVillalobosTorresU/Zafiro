import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Componente ScrollToTop: Sirve para matener siempre la vista de las paginas en el top(La parte de arriba) cada vez que se cambie de pagina

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Siempre al inicio
  }, [pathname]);

  return null;
}

export default ScrollToTop;