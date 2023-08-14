import { Logout } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="w-full h-screen bg-white border-r shadow-r-md flex flex-col justify-between">
        <div>
          <div className="px-3 py-4 mb-4">
            <button type="button" className='border-2 border-primary text-primary font-medium hover:bg-primary-fade py-2 w-full rounded-md'>New Thread</button>
          </div>
          <div className="cursor-pointer hover:bg-light px-3 py-2">
            <p className="line-clamp-1">Thread 1</p>
          </div>
          <div className="cursor-pointer hover:bg-light px-3 py-2">
            <p className="line-clamp-1">Thread 1 Thread 1 Thread 1 Thread 1 Thread 1 Thread 1 Thread 1 </p>
          </div>
          <div className="cursor-pointer bg-light px-3 py-2 text-primary font-medium border-r-[3px] border-primary">
            <p className="line-clamp-1">Thread 1</p>
          </div>
          <div className="cursor-pointer hover:bg-light px-3 py-2">
            <p className="line-clamp-1">Thread 1</p>
          </div>
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