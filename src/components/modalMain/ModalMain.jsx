import { Box } from '@mui/material'
import React from 'react'

function ModalMain({children}) {
  return (
    <Box sx={{
        position: 'fixed',
        zIndex: 1,
        backgroundColor: 'background.modal', 
        display: 'flex', 
        justifyContent: 'center', 
        alignContent: 'center', 
        width: '100vw',
        height: '100vh'
        }}>
        {children}
    </Box>
  )
}

export default ModalMain