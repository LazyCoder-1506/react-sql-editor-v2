import React, { useState } from 'react'
import SavedQuery from './SavedQuery';
import { useSelector } from 'react-redux';

const QuickAccessSection = ({ populateQuery, queryHistory }) => {
  const [activePane, setActivePane] = useState("favourites")

  const favourites = useSelector(state => state.favourites.favourites)

  return (
    <>
      <div className="section-card h-0 min-h-full" id='quick-access-section'>
        <div className="grid grid-cols-2">
          <button type='button' onClick={() => setActivePane("favourites")} className={"rounded-tr-md" + (activePane === "favourites" ? " active-pane" : " inactive-pane")}>Favourites</button>
          <button type='button' onClick={() => setActivePane("history")} className={"rounded-tl-md" + (activePane === "history" ? " active-pane" : " inactive-pane")}>Query History</button>
        </div>
        <div className='overflow-y-auto p-4' style={{ height: "calc(100% - 56px)" }}>
          {
            activePane === 'history' ? (
              queryHistory.length > 0 ? (
                queryHistory.map((query, index) => <SavedQuery key={index} populateQuery={populateQuery} queryText={query} isFavourite={favourites.includes(query)} />)
              ) : (
                <p className='text-gray-500 text-center italic'>No queries run in this thread</p>
              )
            ) : (
              favourites.length > 0 ? (
                favourites.map((query, index) => <SavedQuery key={index} populateQuery={populateQuery} queryText={query} isFavourite={true} />)
              ) : (
                <p className='text-gray-500 text-center italic'>No queries saved as Favourites</p>
              )
            )
          }
        </div>
      </div>
    </>
  )
}

export default QuickAccessSection