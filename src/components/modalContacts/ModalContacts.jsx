import React, { useContext } from 'react'
import ModalMain from '../modalMain/ModalMain'
import { ContactsContext } from '../../context/ContactsContext'
import { Box, Grid, Avatar, Button } from '@mui/material'

function ModalContacts({id, setContactModalOpen}) {
  const {findContact} = useContext(ContactsContext);
  // localizando o contato
  const contact = findContact(id)


  const closeModal = () => {
    setContactModalOpen(false)
  };

  return (
    <ModalMain>
        <Box sx={{backgroundColor: 'white', borderRadius: '8px', padding: '1rem', width: {xs: '300px', md: '400px', lg: '500px'}}} marginY={12} boxShadow={2}>
            <Grid container rowSpacing={6} columnSpacing={3} display={'flex'} justifyContent={'left'} alignItems={'center'}>
                <Grid item xs={2} md={2}>
                    {contact.gender === 'Masculino'? 
                    <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" sx={{boxShadow: '6'}} />
                    :
                    <Avatar src='src\assets\femaleAvatar.jpg' alt="Female Avatar" sx={{boxShadow: '6'}} />
                    }
                </Grid>
                <Grid item xs={10} md={10} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <h2>{contact.name}</h2>
                    <Button onClick={closeModal} >X</Button>
                </Grid>
                <Grid item md={4} xs={12}>
                    <p>CPF: {contact.cpf}</p>
                </Grid>
                <Grid item md={4} xs={12}>
                    <p>Nascimento: {contact.date}</p>
                </Grid>
                <Grid item md={4} xs={12}>
                    <p>Sexo: {contact.gender}</p>
                </Grid>
                <Grid item xs={12}>
                    <p>Endereço: {contact.address}</p>
                </Grid>
            </Grid>
        </Box>
    </ModalMain>
  )
}

export default ModalContacts