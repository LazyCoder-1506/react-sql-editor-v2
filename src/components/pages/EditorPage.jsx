import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import EditorSection from '../inputSection/EditorSection'
import QuickAccessSection from '../inputSection/QuickAccessSection'
import OutputSection from '../outputSection/OutputSection'

const EditorPage = () => {
  const [editorQuery, setEditorQuery] = useState("")
  const [submittedQuery, setSubmittedQuery] = useState("")

  const runQuery = (submittedQuery) => {
    setEditorQuery(submittedQuery)
    setSubmittedQuery(submittedQuery)
  }

  const populateQuery = (query) => {
    setEditorQuery(query)
  }

  return (
    <>
      <div className="w-screen h-screen bg-light">
        <div className="grid grid-cols-6 h-full">
          <div>
            <Sidebar />
          </div>
          <div className="col-span-5 overflow-y-auto p-6" id='editor-section'>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <EditorSection editorQuery={editorQuery} runQuery={runQuery} />
                <QuickAccessSection populateQuery={populateQuery} />
              </div>
              <div>
                <OutputSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditorPage