import React from "react";

import { Footer } from "../componentes/Footer";
import { Header } from "../componentes/Header";
import { BannerCarrusel } from "../componentes/BannerCarrusel";
import { ContPrinc02 } from "../componentes/ContPrinc02";
import { ContPrinc03 } from "../componentes/ContPrinc03";

import "./PrincipalPc.css";

export function PrincipalPc () {
    return (
        <React.Fragment>
            <Header></Header>
            <BannerCarrusel></BannerCarrusel>
            <ContPrinc02></ContPrinc02>
            <ContPrinc03></ContPrinc03>
            <Footer></Footer>
        </React.Fragment>

    );
}