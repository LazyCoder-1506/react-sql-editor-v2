import React, { Suspense, lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../sidebar/Sidebar'
import Notification from '../Notification'
const EditorSection = lazy(() => import('../inputSection/EditorSection'))
const QuickAccessSection = lazy(() => import('../inputSection/QuickAccessSection'))
const OutputSection = lazy(() => import('../outputSection/OutputSection'))

import { addQueryToHistory } from '../../store/threadSlice'
import { showNotification } from '../../store/notificationSlice'

import { getHistorydByThreadId } from '../../utils/thread'

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
                    <Suspense fallback={<div></div>}>
                      <EditorSection editorQuery={editorQuery} runQuery={runQuery} />
                      <QuickAccessSection populateQuery={populateQuery} queryHistory={getHistorydByThreadId(activeThreadId, threads)} />
                    </Suspense>
                  </div>
                  <div>
                    <Suspense fallback={<div></div>}>
                      <OutputSection submittedQuery={submittedQuery} />
                    </Suspense>
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