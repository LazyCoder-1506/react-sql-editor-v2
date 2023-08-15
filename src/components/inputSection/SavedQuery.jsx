import React from 'react'
import { StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';

const SavedQuery = ({ populateQuery, queryText }) => {
  return (
    <>
      <div className="flex gap-1 items-stretch border-b">
        <div className="flex-none">
          <Tooltip title="Add to Favourites" placement="top">
            <IconButton>
              <StarBorderOutlined />
            </IconButton>
          </Tooltip>
        </div>
        <div className="flex-1 cursor-pointer hover:bg-light flex items-center px-2" onClick={() => populateQuery(queryText)}>
          <div className="line-clamp-1">
            {queryText.replace('\n', ' ')}
          </div>
        </div>
      </div>
    </>
  )
}

export default SavedQuery