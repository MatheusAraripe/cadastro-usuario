import { Grid, TextField } from '@mui/material'
import React from 'react'

function SearchBar() {
  return (
    <Grid item xs={12} marginBottom={2} padding={1}>
        <TextField 
        label="Nome do contato" 
        variant="standard" 
        fullWidth
        />
    </Grid>
  )
}

export default SearchBar