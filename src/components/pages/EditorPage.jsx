import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import EditorSection from '../inputSection/EditorSection'
import QuickAccessSection from '../inputSection/QuickAccessSection'
import OutputSection from '../outputSection/OutputSection'
import { useDispatch, useSelector } from 'react-redux'
import { getHistorydByThreadId } from '../../utils/thread'
import { addQueryToHistory } from '../../store/threadSlice'
import Notification from '../Notification'
import { showNotification } from '../../store/notificationSlice'

const EditorPage = () => {
  const [editorQuery, setEditorQuery] = useState("")
  const [submittedQuery, setSubmittedQuery] = useState("")
  const [activeThreadId, setActiveThreadId] = useState(-1)

  const threads = useSelector(state => state.threads.threads)
  const dispatch = useDispatch()

  const handleThreadChange = (threadId) => {
    setActiveThreadId(threadId)
  }

  const runQuery = (submittedQuery) => {
    setEditorQuery(submittedQuery)
    setSubmittedQuery(submittedQuery)
    dispatch(showNotification("Query submitted"))
  }

  useEffect(() => {
    if (activeThreadId !== -1 && submittedQuery.trim().length > 0) dispatch(addQueryToHistory({ threadId: activeThreadId, query: submittedQuery }))
  }, [submittedQuery])

  useEffect(() => {
    setEditorQuery("")
    setSubmittedQuery("")
  }, [activeThreadId])

  const populateQuery = (query) => {
    setEditorQuery(query)
  }

  return (
    <>
      <div className="w-screen h-screen bg-light">
        <div className="grid grid-cols-6 h-full">
          <div>
            <Sidebar threads={threads} activeThreadId={activeThreadId} handleThreadChange={handleThreadChange} />
          </div>
          <div className="col-span-5 overflow-y-auto p-6" id='editor-section'>
            {
              activeThreadId !== -1 ? (
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    <EditorSection editorQuery={editorQuery} runQuery={runQuery} />
                    <QuickAccessSection populateQuery={populateQuery} queryHistory={getHistorydByThreadId(activeThreadId, threads)} />
                  </div>
                  <div>
                    <OutputSection submittedQuery={submittedQuery} />
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-500 text-xl italic text-center">Please select a thread from the left panel to start querying</p>
                </div>
              )
            }
          </div>
        </div>
      </div>

      <Notification />
    </>
  )
}

export default EditorPage