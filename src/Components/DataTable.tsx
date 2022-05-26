import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { PaginationgHelper } from "./PaginationHelper";
import { TableLayout } from "./TableLayout"; 
import { Data } from "./Tools/Datasimple";
import { Person } from "./Tools/Types";

export const DataTable = memo(() => {
    const [entry, setEntry] = useState(15);
    const [entryFound, setEntryFound] = useState([...[Data]])
    const [searchPatt, setSeachPatt] = useState(/./ig)
    const [entryData, setEntryData] = useState(Data);

    useEffect(() => {
        setEntryData(entryFound[0]);
    }, [entry, searchPatt])

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setEntry(Number(e.target.value));
    }
    
    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeachPatt(new RegExp(e.target.value, "ig"));
        // modifier: global match & case-insensitive
    }

    const handleClickOnPage = (pageId: number, dataOnPage: Array<Person>) => {
        setEntryData(dataOnPage);
        // setFrom(pageId);
    }

    const handleLoad = (sample: Array<Person>) => {
        setEntryData(sample);
    }

    return (
        <>
            <div className="tableTop">
                <select defaultValue={15} className="form-select entryControl" onChange={handleOnChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
                entries per page

                <input  className="form-control float-end w-auto" 
                        placeholder="Search..." 
                        spellCheck={false} type="text" 
                        onChange={handleSearchValueChange}
                />
            </div>

            <TableLayout 
                entryData={entryData}
                entry={entry}
            />

            <div className="tableBottom">
            {entryData && entryData.length > 0 ?
                <>
                    <p className="mt-2 d-inline-block">showing {} to {entry} item of 57 entries</p>
                    <PaginationgHelper 
                        entryPerPage={entry}
                        onClick={handleClickOnPage}
                        loadData={handleLoad}
                        patt={searchPatt}
                    />
                </>
                        :
                <p className="text-secondary pt-2 pb-3 text-center">
                    No results match your search query
                </p>
            }
            </div>
        </>
    )
})
