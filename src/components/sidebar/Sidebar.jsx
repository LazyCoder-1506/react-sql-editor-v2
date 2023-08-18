import { Logout } from '@mui/icons-material'
import { IconButton, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addThread } from '../../store/threadSlice'
import { showNotification } from '../../store/notificationSlice'

const Sidebar = ({ threads, activeThreadId, handleThreadChange }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [threadNameInput, setThreadNameInput] = useState("")
  const [error, setError] = useState(false)

  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const handleInputChange = (value) => {
    setThreadNameInput(value)
    setError(false)
  }

  useEffect(() => {
    setError(false)
  }, [modalOpen])

  const dispatch = useDispatch()

  const handleCreateNewThread = () => {
    if (threadNameInput.trim() !== "") {
      const newThreadId = Date.now()
      const payload = {
        id: newThreadId,
        name: threadNameInput
      }
      dispatch(addThread(payload))
      setModalOpen(false)
      setThreadNameInput("")
      handleThreadChange(newThreadId)
      dispatch(showNotification("New thread added"))
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-white border-r shadow-r-md flex flex-col justify-between">
        <div>
          <div className="px-3 py-4">
            <button type="button" onClick={handleModalOpen} className='btn-outline border-2 w-full'>New Thread</button>
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

      <Modal open={modalOpen}>
        <div className='section-card w-[25%] absolute top-[50vh] left-[50vw] -translate-x-[50%] -translate-y-[50%] p-4'>
          <p className="text-lg font-medium mb-4">Add New Thread</p>
          <input
            type="text"
            name="threadNameInput"
            id="threadNameInput"
            className='px-3 py-2 rounded-md border-2 focus:border-primary w-full'
            placeholder='Thread Name'
            value={threadNameInput}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <span className={"text-red-500 text-sm mt-2" + (error ? "" : " hidden")}>Thread name cannot be empty.</span>
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleCreateNewThread} className='btn-outline border-2 px-4'>Add</button>
            <button type="button" onClick={handleModalClose} className='btn-secondary'>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Sidebar