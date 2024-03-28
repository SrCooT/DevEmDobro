import React, { useContext } from 'react';
import { PainelContext } from '../../contexts/themes-alterad';

export const Buttonn = (props) => {


    const { painel } = useContext(PainelContext);

    return(
        <button {...props}
            style={{ color: painel.color, backgroundColor: painel.background}}
        />
    )

}