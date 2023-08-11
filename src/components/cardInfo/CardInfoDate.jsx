import { Grid } from '@mui/material'
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
// eslint-disable-next-line no-unused-vars
import React from 'react'

function CardInfoDate() {
  return (
    <Grid
    container
    rowSpacing={1}
    sx={{display: 'flex', justifyContent: 'left', alignItems: 'center', borderRadius: '5px'}} marginTop={4} boxShadow={2} maxWidth={'400px'} p={1}
    >
        <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <CakeTwoToneIcon sx={{color: 'orange.dark'}} fontSize='large'/>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <p>Maria Lúcia faz 32 anos dia <strong>27/09/2023</strong></p>
        </Grid>
    </Grid>
  )
}

export default CardInfoDate
