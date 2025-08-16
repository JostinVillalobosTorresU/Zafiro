import React from "react";

import { Footer } from "../../componentes/Footer";
import { Header } from "../../componentes/Header";
import { BannerCarrusel } from "./BannerCarrusel";
import { ContPrinc02 } from "./ContPrinc02";
import { ContPrinc03 } from "./ContPrinc03";

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