import React, { Fragment } from "react";
import { CardType } from "./Tools/Types";

export const Card = ({children, extraClass = 'mb-4'}: CardType) => {
    return (
        <div className={`card ${extraClass}`}>
            {children}
        </div>
    )
}