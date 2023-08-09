import React, { useEffect, useState } from 'react'
import { Alert } from '@mui/material'

function InfoAlert() {
  
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
        <Alert severity="info" sx={{
          width: {xs: '250px', sm: '300px', md: '500px'},
          position: 'absolute',
          zIndex: '99',
          right: '10px',
          top: '20px',
          border: '1px solid black'
          }}>
          Você editou as informações de um contato
        </Alert>
      )}
    </>
  )
}

export default InfoAlert