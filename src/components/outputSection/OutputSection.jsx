import React, { useState } from 'react'

import { user_data } from '../../assets/mock_data/users_data'
import OutputTable from './OutputTable'

const OutputSection = () => {
  const [activePane, setActivePane] = useState("table")

  return (
    <>
      <div className="section-card p-4">
        <div className="mb-4">
          <button type='button' onClick={() => setActivePane("table")} className={"px-6 rounded-t" + (activePane === "table" ? " active-pane" : " inactive-pane")}>Data Table</button>
          <button type='button' onClick={() => setActivePane("insights")} className={"px-6 rounded-t" + (activePane === "insights" ? " active-pane" : " inactive-pane")}>Insights</button>
        </div>
        <OutputTable data={user_data} />
      </div>
    </>
  )
}

export default OutputSection