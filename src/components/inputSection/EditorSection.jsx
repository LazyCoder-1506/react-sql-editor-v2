import React, { useState } from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

const EditorSection = () => {
  const [editorValue, setEditorValue] = useState("")

  return (
    <>
      <div className="bg-white border rounded-md shadow-lg">
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
          <button type="button" className='hover:bg-light text-gray-500 font-medium px-4 py-2 rounded-md'>Clear</button>
          <button type="button" className='hover:bg-primary text-primary hover:text-white border-2 border-primary font-medium px-4 py-2 rounded-md'>Run Query</button>
        </div>
      </div>
    </>
  )
}

export default EditorSection