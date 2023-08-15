import React from 'react'
import { TextField, MenuItem, Grid} from '@mui/material'

function SelectGender() {
  return (
    <Grid item xs={12} marginBottom={2} padding={1}>
        <TextField
        fullWidth
        select
        variant="standard"
        label="Sexo"
        >
            <MenuItem value='Feminino'>Feminino</MenuItem>
            <MenuItem value='Masculino'>Masculino</MenuItem>
        </TextField>
    </Grid>
  )
}

export default SelectGender