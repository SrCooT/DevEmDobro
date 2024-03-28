import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context';

export const Card = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <h1>Titulo do Card</h1>
            <p>Parágrafo do Card,que tera sua cor alterada ao clicar </p>

        </div>
    )
}