import { Grid, TextField } from '@mui/material'
import { ContactsContext } from '../../context/ContactsContext';
import React, { useContext, useState } from 'react'

function SearchBar({setMyContacts, setSearchValue}) {
  
  const {searchContact} = useContext(ContactsContext)

  const [name, setName] = useState('');
  // const [cpf, setCpf] = useState('');
  // const [city, setCity] = useState('');


  const handleNameChange = (e) =>{
    setName(e.target.value);
    setSearchValue(e.target.value)
    setMyContacts(searchContact(e.target.value));
  };

  // const handleCpfChange = (e) =>{
  //   setCpf(e.target.value);
  //   setSearchValue(e.target.value)
  //   setMyContacts(searchContact(e.target.value));
  // };

  // const handleCityChange = (e) =>{
  //   setCity(e.target.value);
  //   setSearchValue(e.target.value)
  //   setMyContacts(searchContact(e.target.value));
  // };


  return (
    <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Grid item xs={12} marginBottom={2} padding={1}>
          <TextField 
          label="Nome do contato" 
          variant="standard" 
          fullWidth
          value={name}
          onChange={handleNameChange}
          />
      </Grid>
      {/* <Grid item xs={2} marginBottom={2} padding={1}>
          <TextField 
          label="CPF" 
          variant="standard" 
          fullWidth
          value={cpf}
          onChange={handleCpfChange}
          />
      </Grid>
      <Grid item xs={4} marginBottom={2} padding={1}>
          <TextField 
          label="Cidade" 
          variant="standard" 
          fullWidth
          value={city}
          onChange={handleCityChange}
          />
      </Grid> */}
    </Grid>
  )
}

export default SearchBar;