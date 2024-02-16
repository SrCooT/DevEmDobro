import React from "react";
import './card.css'


const Card = ({children,color, showCardColor}) => {
    return (
        <div className="card"
        style={{backgroundColor: color}}
        onClick={() => showCardColor(color)}>
            {children}
        </div>
    );
};


Card.defaultProps = {
    color: 'orange'
}




// class Card extends React.Component {
//     render(){
//         return (
//             <div className="card">
//                 <h3>{this.props.title}</h3>
//                 <p>Esse é um texto de card</p>
//             </div>
//         )
//     }
// }

export default Card