import React from 'react'
import { CSVLink } from 'react-csv';
import { MaterialReactTable } from 'material-react-table';
import { getTableColumnsFromData } from '../../utils/table'

const OutputTable = ({ data }) => {
  const columns = data.length ? getTableColumnsFromData(data[0]) : []

  return (
    <>
      {
        data.length ? (
          <MaterialReactTable
            columns={columns}
            data={data}
            muiTablePaginationProps={{ rowsPerPageOptions: [10, 50, 100] }}
            enableDensityToggle={false}
            enableFullScreenToggle={false}
            enableHiding={false}
            enableStickyHeader
            muiTableContainerProps={{ sx: { maxHeight: '80vh' } }}
            muiTableHeadCellProps={{
              sx: {
                fontSize: '14px',
              },
            }}
            renderTopToolbarCustomActions={() => (
              <CSVLink data={data} filename={'output.csv'}>
                <button type='button' className='btn-outline text-sm border px-4'>Export Data</button>
              </CSVLink>
            )}
          />
        ) : (
          <p className="italic text-gray-500">Run a query to see the results here</p>
        )
      }
    </>
  )
}

export default OutputTable