import React from "react";
import { ButtonType } from "./Tools/Types";

export const Button = ({Class, icon, onClick, type, id}: ButtonType) => {
    return (
        <button className={`btn ${type} ${Class}`} 
                type="button" id={id}
                onClick={onClick}
        >
            <i className={icon}></i>
        </button>
    )
}