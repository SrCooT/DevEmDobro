import { createContext, React, useState } from "react";



export const painels = {
    white: {
        color: '#020024',

        background: ' #00d586'
    }, 

    black: {
        color: '#00d4ff',

        background: '#054486',
    }
}

export const PainelContext = createContext({})

export const PainelProvider = (props) => {
    
    const [ painel, setPainel] = useState(painels.white)

    return(
        <PainelContext.Provider value={{painel,setPainel}}>
            {props.children}
        </PainelContext.Provider>
    )
}