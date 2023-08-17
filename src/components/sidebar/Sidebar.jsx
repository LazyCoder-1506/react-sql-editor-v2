import { Logout } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const Sidebar = ({ threads, activeThreadId, handleThreadChange }) => {
  

  return (
    <>
      <div className="w-full h-screen bg-white border-r shadow-r-md flex flex-col justify-between">
        <div>
          <div className="px-3 py-4">
            <button type="button" className='border-2 border-primary text-primary font-medium hover:bg-primary-fade py-2 w-full rounded-md'>New Thread</button>
          </div>
          {
            threads.length > 0 ? (
              threads.map(thread => (
                <div key={thread.id} onClick={() => handleThreadChange(thread.id)} className={"cursor-pointer px-3 py-2 " + (thread.id === activeThreadId ? "bg-light text-primary font-medium border-r-[3px] border-primary" : "hover:bg-light")}>
                  <p className="line-clamp-1">{thread.name}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center italic px-3">No threads present. Please create a new thread</p>
            )
          }
        </div>
        <div className="border-t-2 border-slate-200 p-4 flex justify-between items-center">
          <span className="font-bold text-lg text-gray-500 mb-2 text-center">John Doe</span>
          <IconButton>
            <Logout />
          </IconButton>
        </div>
      </div>
    </>
  )
}

export default Sidebar