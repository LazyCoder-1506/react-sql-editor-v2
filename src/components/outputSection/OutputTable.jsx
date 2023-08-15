import React from 'react'
import { CSVLink } from 'react-csv';
import { MaterialReactTable } from 'material-react-table';
import { getTableColumnsFromData } from '../../utils/table'

const OutputTable = ({ data }) => {
  const columns = getTableColumnsFromData(data[0])

  return (
    <>
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
            <button type='button' className='hover:bg-primary-fade text-primary text-sm border border-primary font-medium px-4 py-2 rounded-md'>Export Data</button>
          </CSVLink>
        )}
      />
    </>
  )
}

export default OutputTable