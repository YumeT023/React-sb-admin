import React, { useEffect, useState } from "react";
import { PersonKey, TableLayoutType } from "./Tools/Types";
import { MapData } from "./MapData";
import { Data } from "./Tools/Datasimple";
import { sortString, sortStringByDigitIgnoringNonDigit } from "./Tools/HelperFn";


export const TableLayout = ({entryData, entry}: TableLayoutType) => {
    const [data, setData] = useState(Data);
    const [orderBy, setOrder] = useState({
        id: 0,
        ordering: 'asc'
    });

    useEffect(() => {
        entryData && setData(() => {
            return [...entryData]
        });
    }, [entryData]);

    const handleFilterChange = (filterBy: PersonKey, headId: number) => {
        let tmp = data.slice();
        let {id, ordering} = orderBy;

        if (id === headId) {
            ordering = ordering === 'asc' ? 'desc' : 'asc';
        } else {
            ordering = 'asc';
        }
        // check if the selected head (way of sorting) 's id is the same as previous
        // if true then it's order will be the opposite of the previous
        // else the initial would be 'asc

        setOrder({
            id: headId,
            ordering: ordering
        });
        
        setData(() => {
            if (filterBy !== "age" && filterBy !== "startDate" && filterBy !== "salary") {
                return ordering ===  'asc' ?
                        [...tmp.sort((a, b) => sortString(a[filterBy], b[filterBy]))] :
                    [...tmp.sort((a, b) => sortString(b[filterBy], a[filterBy]))];
                }
            return ordering === 'desc' ?
                        [...tmp.sort((a, b) => sortStringByDigitIgnoringNonDigit(a[filterBy], b[filterBy]))] :
                    [...tmp.sort((a, b) => sortStringByDigitIgnoringNonDigit(b[filterBy], a[filterBy]))];
        });
    }

    const getStatus = (id: number) => orderBy.id === id ? orderBy.ordering : '';
    // arrow status, if the th's id is equal to the orderBy.id then the orderBy.ordering (label: 'asc' | 'desc') will be returned
    // else, an empty-string

    return (
        <>
            <table id="DataTable">
                <thead>
                    <tr>
                        <th onClick={() => handleFilterChange('name', 0)} className={getStatus(0)}>
                            <span className="sorter">Name</span>
                        </th>
                        <th onClick={() => handleFilterChange('position', 1)} className={`w-25 ${getStatus(1)}`}>
                            <span className="sorter">Position</span>
                        </th>
                        <th onClick={() => handleFilterChange('office', 2)} className={`w-15 ${getStatus(2)}`}>
                            <span className="sorter">Office</span>
                        </th>
                        <th onClick={() => handleFilterChange('age', 3)} className={`w-10 ${getStatus(3)}`}>
                            <span className="sorter">Age</span>
                        </th>
                        <th onClick={() => handleFilterChange('startDate', 4)} className={`w-15 ${getStatus(4)}`}>
                            <span className="sorter">Start Date</span>
                        </th>
                        <th onClick={() => handleFilterChange('salary', 5)} className={`w-15 ${getStatus(5)}`}>
                            <span className="sorter">Salary</span>
                        </th>
                    </tr>
                </thead>    

                {data.length > 0 &&
                    <tbody>
                        <MapData
                            data={data}
                        />
                    </tbody>
                }
            </table>
        </>
    )
};