import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import EditorSection from '../inputSection/EditorSection'
import QuickAccessSection from '../inputSection/QuickAccessSection'

const EditorPage = () => {
  return (
    <>
      <div className="w-screen h-screen bg-light">
        <div className="grid grid-cols-6 h-full">
          <div>
            <Sidebar />
          </div>
          <div className="col-span-5 overflow-y-auto p-6">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <EditorSection />
                <QuickAccessSection />
              </div>
              <div>output</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditorPage