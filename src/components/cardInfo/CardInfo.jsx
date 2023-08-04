import { Box, Grid } from '@mui/material'
import React from 'react'

function CardInfo({info}) {
  return (
    <Grid container sx={{backgroundColor: 'blue.main', color: 'blue.dark', marginRight: {xs: '0', md: '3rem'}}} rowSpacing={3} marginTop={12} p={2} borderRadius={2} boxShadow={1} maxWidth={'400px'}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '60px'}}>
            <h2>{info}</h2>
        </Grid>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h2>Contatos salvos</h2>
        </Grid>
    </Grid>
  )
}

export default CardInfo