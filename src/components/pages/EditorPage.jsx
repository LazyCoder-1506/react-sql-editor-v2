import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const EditorPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-light">
        <div className="grid grid-cols-6 h-full">
          <div>
            <Sidebar />
          </div>
          <div className="col-span-5 overflow-y-auto"></div>
        </div>
      </div>
    </>
  )
}

export default EditorPage