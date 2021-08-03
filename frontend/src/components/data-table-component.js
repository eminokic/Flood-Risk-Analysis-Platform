//Amar table UI
import React, { useMemo } from "react";
import "@reach/combobox/styles.css";
import { useTable } from "react-table";
import mock_data from "./mock_data.json"
import { columns } from "./columns"

export const DataTable = () => {

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
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}