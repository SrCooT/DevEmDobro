import React, { useContext } from "react";
import { PainelContext } from "../../contexts/themes-alterad";


export const Page = () => {

    const { painel } = useContext(PainelContext)

    return (
        <div style={{ color: painel.color, background: painel.background }}>
            <h1> Titulo da page 2</h1>
            <p>Paragrafo da Page que troca de cor </p>
        </div>
    )
}