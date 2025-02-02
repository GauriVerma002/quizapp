import React from "react";
import './Card.css'
const Card =(props) =>{
    return (
        <div>
            <h3>{props.question}</h3>
            <p> {props.description}</p>
        </div>
    )
}
export default Card;