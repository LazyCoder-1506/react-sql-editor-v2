import React, { useState, useEffect } from 'react'

import { user_data } from '../../assets/mock_data/users_data'
import { movie_data } from '../../assets/mock_data/movies_data'
import { order_data } from '../../assets/mock_data/orders_data'
import OutputTable from './OutputTable'
import InsightsPane from './InsightsPane'

const OutputSection = ({ submittedQuery }) => {
  const queryMap = [
    {
      query: "select * from MOVIES",
      data: movie_data
    },
    {
      query: "select * from USERS",
      data: user_data
    }
  ]
  
  const [activePane, setActivePane] = useState("table")
  const [results, setResults] = useState([])

  useEffect(() => {
    selectResults()
  }, [submittedQuery])

  const selectResults = () => {
    if (submittedQuery === "") {
      setResults([])
      return
    }
    const queryIndex = queryMap.findIndex(o => o.query === submittedQuery)
    if (queryIndex === -1) {
      setResults(order_data)
    } else {
      setResults(queryMap[queryIndex].data)
    }
  }

  return (
    <>
      <div className="section-card p-4">
        <div className="mb-4">
          <button type='button' onClick={() => setActivePane("table")} className={"px-6 rounded-t" + (activePane === "table" ? " active-pane" : " inactive-pane")}>Data Table</button>
          <button type='button' onClick={() => setActivePane("insights")} className={"px-6 rounded-t" + (activePane === "insights" ? " active-pane" : " inactive-pane")}>Insights</button>
        </div>
        {
          activePane === "table" ? (
            <OutputTable data={results} />
          ) : (
            <InsightsPane />
          )
        }
      </div>
    </>
  )
}

export default OutputSection