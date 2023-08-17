import React, { useState } from 'react'
import SavedQuery from './SavedQuery';
import { useSelector } from 'react-redux';

const QuickAccessSection = ({ populateQuery }) => {
  const [activePane, setActivePane] = useState("history")

  const favourites = useSelector(state => state.favourites.favourites)

  const a = [0, 0, 0, 0, 0, 0]

  return (
    <>
      <div className="section-card h-0 min-h-full" id='quick-access-section'>
        <div className="grid grid-cols-2">
          <button type='button' onClick={() => setActivePane("history")} className={"rounded-tl-md" + (activePane === "history" ? " active-pane" : " inactive-pane")}>Query History</button>
          <button type='button' onClick={() => setActivePane("favourites")} className={"rounded-tr-md" + (activePane === "favourites" ? " active-pane" : " inactive-pane")}>Favourites</button>
        </div>
        <div className='overflow-y-auto p-4' style={{ height: "calc(100% - 56px)" }}>
          {
            activePane === 'history' ? (
              a.map(() => <SavedQuery populateQuery={populateQuery} queryText={`select * from MOVIES\nwhere ACTOR='TOM CRUISE'\nand NAME='MISSION IMPOSSIBLE'`} isFavourite={false} />)
            ) : (
              favourites.map(query => <SavedQuery populateQuery={populateQuery} queryText={query} isFavourite={true} />)
            )
          }
        </div>
      </div>
    </>
  )
}

export default QuickAccessSection