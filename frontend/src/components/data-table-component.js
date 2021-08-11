//Amar table UI
import React, { useMemo } from "react";
import "@reach/combobox/styles.css";
import { useTable } from "react-table";
import mock_data from "./mock_data.json"
import { COLUMNS } from "./columns"
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import "./table.css"
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function DataTable() {
  return <div>
    <DataTableMain></DataTableMain>
    </div>
}

const DataTableMain= () => {

  const columns = useMemo(() => COLUMNS, []) //memoize so it doesnt have to 
  const data = useMemo(() => mock_data, []) //recalculate every time

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow
  } = tableInstance

  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}