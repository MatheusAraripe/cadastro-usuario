import { Grid, TextField } from '@mui/material'
import { ContactsContext } from '../../context/ContactsContext';
import React, { useContext, useState } from 'react'

function SearchBar({setMyContacts, setSearchValue}) {
  
  const {searchContact} = useContext(ContactsContext)

  const [name, setName] = useState('');
  const handleChange = (e) =>{
    setName(e.target.value);
    setSearchValue(e.target.value)
    setMyContacts(searchContact(e.target.value));
  };


  return (
    <Grid item xs={12} marginBottom={2} padding={1}>
        <TextField 
        label="Nome, cpf ou cidade" 
        variant="standard" 
        fullWidth
        value={name}
        onChange={handleChange}
        />
    </Grid>
  )
}

export default SearchBar;