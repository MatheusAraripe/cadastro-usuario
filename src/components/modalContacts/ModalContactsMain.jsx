import React from 'react'
import { Box, Grid } from '@mui/material'

function ModalContactsMain({children, isForm}) {
  return (
    <Box sx={{backgroundColor: 'white', borderRadius: '8px', padding: '1rem', width: {xs: '300px', md: '400px', lg: '500px'}}} marginY={12} boxShadow={2}>
        <Grid container rowSpacing={3} columnSpacing={isForm && 1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            {children}
        </Grid>
    </Box>
  )
}

export default ModalContactsMain