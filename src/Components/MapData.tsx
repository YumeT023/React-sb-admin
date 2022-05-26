import React, { memo } from "react";
import { Person } from "./Tools/Types";

// can be : Person[], but Array<Person> looks cool T.T
export const MapData = memo((props: {data: Array<Person>}) => {
    return (
        <>
            {props.data.map(({name, position, office, age, startDate, salary}, index) => (
                <tr key={index} >
                    <td>{name}</td>
                    <td>{position}</td>
                    <td>{office}</td>
                    <td>{age}</td>
                    <td>{startDate}</td>
                    <td>{salary}</td>
                </tr>
            ))}
        </>
    );
})