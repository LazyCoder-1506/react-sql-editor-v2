import React from 'react'
import { Star, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../../store/favouriteSlice';

const SavedQuery = ({ populateQuery, queryText, isFavourite }) => {
  const dispatch = useDispatch()

  const handleAddToFavourites = (query) => {
    dispatch(addFavourite(query))
  }

  const handleRemoveFromFavourites = (query) => {
    dispatch(removeFavourite(query))
  }

  return (
    <>
      <div className="flex gap-1 items-stretch border-b">
        <div className="flex-none">
          {
            isFavourite ? (
              <Tooltip title="Remove from Favourites" >
                <IconButton onClick={() => handleRemoveFromFavourites(queryText)}>
                  <Star sx={{ color: '#2026D2' }} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Add to Favourites" placement="top">
                <IconButton onClick={() => handleAddToFavourites(queryText)}>
                  <StarBorderOutlined />
                </IconButton>
              </Tooltip>
            )
          }
        </div>
        <Tooltip placement='bottom' arrow title={<div style={{ fontSize: '12px' }}>{queryText}</div>}>
          <div className="flex-1 cursor-pointer hover:bg-light flex items-center px-2" onClick={() => populateQuery(queryText)}>
            <div className="line-clamp-1">
              {queryText.replace('\n', ' ')}
            </div>
          </div>
        </Tooltip>
      </div>
    </>
  )
}

export default SavedQuery