import React, { useEffect, useState } from "react";
import { Data } from "./Tools/Datasimple";
import { filterPersonArrayByRegex } from "./Tools/HelperFn";
import { Pagination, Person } from "./Tools/Types";

export const PaginationgHelper = ({entryPerPage, onClick, patt, loadData}: Pagination) => {
    const [page, setPage] = useState(new Array<Array<Person>>());


    useEffect(() => {
        const tmp = filterPersonArrayByRegex(Data, patt);
        const pageTemp = new Array<Array<Person>>();

        while (tmp.length > 0) {
            pageTemp.push(tmp.splice(0, entryPerPage));
        }

        setPage(() => {
            return [...pageTemp];
        })
        
    }, [entryPerPage, patt]);

    useEffect(() => {
        loadData(page[0]);
    }, [page])

    return (
        <ul className="pagination-container mt-0">
            {page.map((_, index) => (
                <li className="pagination" key={index + 1} >
                    <button className="btn btn-outline-secondary rounded-0 border-light" onClick={() => onClick(index + 1, page[index])}>{index + 1}</button>
                </li>
            ))}
        </ul>
    )
}