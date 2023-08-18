import React, { useState, useEffect } from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { useDispatch } from 'react-redux';
import { showNotification } from '../../store/notificationSlice';

const EditorSection = ({ editorQuery, runQuery }) => {
  const [editorValue, setEditorValue] = useState(editorQuery)

  const dispatch = useDispatch()

  // set value of local state variable when props change
  useEffect(() => {
    setEditorValue(editorQuery)
  }, [editorQuery])

  const handleClearEditor = () => {
    setEditorValue("")
  }

  const handleSubmitQuery = () => {
    if (editorValue.trim().length === 0) {
      dispatch(showNotification("Query is empty"))
      return
    }
    runQuery(editorValue)
  }

  return (
    <>
      <div className="section-card" id='editor-section'>
        <AceEditor
          mode="mysql"
          id="editor"
          name="editor"
          theme="sqlserver"
          width='100%'
          fontSize={16}
          minLines={15}
          maxLines={12}
          showPrintMargin={false}
          showGutter
          placeholder="Write query..."
          showLineNumbers
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={editorValue}
          onChange={(value) => setEditorValue(value)}
        />
        <div className="flex justify-end gap-4 p-4">
          <button type="button" onClick={handleClearEditor} className='btn-secondary'>Clear</button>
          <button type="button" onClick={handleSubmitQuery} className='hover:bg-primary text-primary hover:text-white border-2 border-primary font-medium px-4 py-2 rounded-md'>Run Query</button>
        </div>
      </div>
    </>
  )
}

export default EditorSection