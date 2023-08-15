import React, { useContext } from 'react'
import { ContactsContext } from '../../context/ContactsContext';
import { TextField, MenuItem, Grid} from '@mui/material'

function SelectGender({setMyContacts, searchValue}) {

  const {filterContactsGender} = useContext(ContactsContext)

  const handleChange = (e) =>{
    setMyContacts(filterContactsGender(e.target.value, searchValue))
  };

  return (
    <Grid item xs={12} marginBottom={2} padding={1}>
        <TextField
        fullWidth
        select
        variant="standard"
        label="Sexo"
        onChange={handleChange}
        >   
            <MenuItem value='all'>Todos</MenuItem>
            <MenuItem value='Feminino'>Feminino</MenuItem>
            <MenuItem value='Masculino'>Masculino</MenuItem>
        </TextField>
    </Grid>
  )
}

export default SelectGender