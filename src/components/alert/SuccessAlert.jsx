import React from 'react'
import { Alert } from '@mui/material'

function SuccessAlert() {
  return (
    <Alert severity="success" variant="filled" sx={{
      width: '500px',
      position: 'absolute',
      zIndex: '99',
      right: '10px',
      top: '20px',
      backgroundColor: 'green.main',
      color: 'white'
      
    }}>
      Contato adicionado com sucesso!
    </Alert>
  )
}

export default SuccessAlert