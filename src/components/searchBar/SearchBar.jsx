import { Grid, TextField } from '@mui/material'
import { ContactsContext } from '../../context/ContactsContext';
import React, { useContext, useState } from 'react'

function SearchBar({setMyContacts}) {
  
  const {searchContact} = useContext(ContactsContext)

  const [name, setName] = useState('');
  const handleChange = (e) =>{
    setName(e.target.value);
    setMyContacts(searchContact(e.target.value));
  };


  return (
    <Grid item xs={12} marginBottom={2} padding={1}>
        <TextField 
        label="Nome do contato" 
        variant="standard" 
        fullWidth
        value={name}
        onChange={handleChange}
        />
    </Grid>
  )
}

export default SearchBar;