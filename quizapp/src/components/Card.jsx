import React from "react";

const Card =(props) =>{
    return (
        <div>
            <h3>{props.question}</h3>
            <p> {props.description}</p>
        </div>
    )
}
export default Card;