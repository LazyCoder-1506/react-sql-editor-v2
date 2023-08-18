import { Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../store/notificationSlice'

const Notification = () => {
  const notification = useSelector(state => state.notification.notification)
  const dispatch = useDispatch()

  const handleNotificationClose = () => {
    dispatch(hideNotification())
  }

  return (
    <>
      <Snackbar
        open={notification.open}
        autoHideDuration={2000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={notification.message}
      />
    </>
  )
}

export default Notification