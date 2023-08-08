import React, { useEffect, useState } from 'react'
import { Alert } from '@mui/material'

function SuccessAlert({message}) {
  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000)

    return () => clearTimeout(timeout);
  }, [])
  return (
    <>
      {isVisible && (
        <Alert severity="success" variant="filled" sx={{
          width: {xs: '250px', sm: '300px', md: '500px'},
          position: 'absolute',
          zIndex: '99',
          right: '10px',
          top: '20px',
          backgroundColor: 'green.main',
          color: 'white',
          }}>
          Contato <strong>{message}</strong> com sucesso!
        </Alert>
      )}
    </>
  )
}

export default SuccessAlert