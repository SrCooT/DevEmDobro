import React, { useContext } from "react";
import { PainelContext, painels } from "../../contexts/themes-alterad";

import { Buttonn } from './../buttonn/button';


export const PainelTogglerButton = () => {


    const { painel, setPainel } = useContext(PainelContext)

    return(
        <div>
            <Buttonn onClick={() => setPainel(painel === painels.white ? painels.black : painels.white)}>Clique Aqui</Buttonn> 
        </div>
    )
}