import { Grid, Avatar} from '@mui/material'
import React from 'react'

function CardInfoDate() {
  return (
    <Grid 
    container
    >
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} marginTop={4} >
            <Avatar src='src\assets\femaleAvatar.jpg' alt="Male Avatar"  sx={{boxShadow: '6', marginRight: '1rem'}} />
            <p>Maria Lúcia faz 32 anos dia 27/09/2023</p>
        </Grid>
    </Grid>
  )
}

export default CardInfoDate