//Amar table UI 
import React, { useMemo } from "react";
import "@reach/combobox/styles.css";
import { useTable, useGlobalFilter, usePagination, useSortBy } from "react-table";
import mock_data from "./mock_data.json"
import { COLUMNS } from "./columns"
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import "./table.css"
import { GlobalFilter } from "./GlobalFilter";
import { api } from '../api';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function DataTable() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    api().get('data')
      .then((response) => {
        console.log('Are we getting a response?', response)
        setData(response.data);
      });
  }, [])
  return <div>
    <DataTableMain data={data}></DataTableMain>
  </div>
}

const DataTableMain = (props) => {


  const columns = useMemo(() => COLUMNS, []) //memoize so it doesnt have to 
  const data = useMemo(() => props.data, []) //recalculate every time

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data,
  },
    useGlobalFilter,
    useSortBy,
    usePagination,
  )

  const { pageIndex } = state
  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} >
        <thead>
          {
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th class={column.id}{...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}

                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' ⬇️' : ' ⬆️') : ''}
                      </span>
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return <td class={cell.column.id}{...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page: {' '}
          <input type='number' defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }} />
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  )
}
