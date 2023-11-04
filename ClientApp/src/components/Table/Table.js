import React from 'react';


//Code from: https://medium.com/@thashwiniwattuhewa/generic-react-table-component-1407a6fc2179, Generic-react-table-component

//This is a generic table where we only need to input columns and data and a tableTitle.
//The header function takes the data and the row function creates the table records.




const Table = ({ data, columns, tableTitle }) => {

    const headers = columns.map((column, index) => (
        <th key={`headCell-${index}`} className="!z-0">
            {column.title}
        </th>
    ));

    const rows = !data?.length ? (
        <tr>
            <td colSpan={columns.length} className="text-center">
                Empty List
            </td>
        </tr>
    ) : (
        data?.map((row, index) => (
            <tr key={`row-${index}`}>
                {columns.map((column, index2) => {
                    const value = column.render
                        ? column.render(column, row)
                        : row[column.key];

                    return <td key={`cell-${index2}`}>{value}</td>;
                })}
            </tr>
        ))
    );

    return (
        <div className="overflow-x-auto">
            <h2>{tableTitle}</h2>
            <table className="table w-full">
                <thead className="bg-slate-400 text-black">
                    <tr>{headers}</tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default Table;