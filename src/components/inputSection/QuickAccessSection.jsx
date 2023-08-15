import { Star, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react'

const QuickAccessSection = () => {
  const [activePane, setActivePane] = useState("history")

  return (
    <>
      <div className="section-card h-0 min-h-full" id='quick-access-section'>
        <div className="grid grid-cols-2">
          <button type='button' onClick={() => setActivePane("history")} className={"rounded-tl-md" + (activePane === "history" ? " active-pane" : " inactive-pane")}>Query History</button>
          <button type='button' onClick={() => setActivePane("favourites")} className={"rounded-tr-md" + (activePane === "favourites" ? " active-pane" : " inactive-pane")}>Favourites</button>
        </div>
        <div className='overflow-y-auto p-4' style={{ height: "calc(100% - 56px)" }}>
          <div className="flex gap-4 items-center border-b">
            <div className="flex-none">
              <Tooltip title="Add to Favourites" placement="top">
                <IconButton>
                  <StarBorderOutlined />
                </IconButton>
              </Tooltip>
            </div>
            <div className="flex-1 line-clamp-1">
              select * from MOVIES where ACTOR='TOM CRUISE' and NAME='MISSION IMPOSSIBLE'
            </div>
          </div>
          <div className="flex gap-4 items-center border-b">
            <div className="flex-none">
              <Tooltip title="Remove from Favourites" >
                <IconButton>
                  <Star sx={{ color: '#2026D2' }} />
                </IconButton>
              </Tooltip>
            </div>
            <div className="flex-1 line-clamp-1">
              select * from MOVIES where ACTOR='TOM CRUISE' and NAME='MISSION IMPOSSIBLE'
            </div>
          </div>
          <div className="flex gap-4 items-center border-b">
            <div className="flex-none">
              <IconButton>
                <StarBorderOutlined />
              </IconButton>
            </div>
            <div className="flex-1 line-clamp-1">
              select * from MOVIES where ACTOR='TOM CRUISE' and NAME='MISSION IMPOSSIBLE'
            </div>
          </div>
          <div className="flex gap-4 items-center border-b">
            <div className="flex-none">
              <IconButton>
                <StarBorderOutlined />
              </IconButton>
            </div>
            <div className="flex-1 line-clamp-1">
              select * from MOVIES where ACTOR='TOM CRUISE' and NAME='MISSION IMPOSSIBLE'
            </div>
          </div>
          <div className="flex gap-4 items-center border-b">
            <div className="flex-none">
              <IconButton>
                <StarBorderOutlined />
              </IconButton>
            </div>
            <div className="flex-1 line-clamp-1">
              select * from MOVIES where ACTOR='TOM CRUISE' and NAME='MISSION IMPOSSIBLE'
            </div>
          </div>
          <div className="flex gap-4 items-center border-b">
            <div className="flex-none">
              <IconButton>
                <StarBorderOutlined />
              </IconButton>
            </div>
            <div className="flex-1 line-clamp-1">
              select * from MOVIES where ACTOR='TOM CRUISE' and NAME='MISSION IMPOSSIBLE'
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickAccessSection