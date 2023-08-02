import React, { useContext } from 'react'
import ModalMain from '../modalMain/ModalMain'
import ModalContactsMain from './ModalContactsMain'
import { Box, Grid, Avatar, Button } from '@mui/material'

function ModalContacts({item, setContactModalOpen}) {

  const closeModal = () => {
    setContactModalOpen(false)
  };

  return (
    <ModalMain>
        <ModalContactsMain>
            <Grid item xs={2} md={2}>
                {item.gender === 'Masculino'? 
                <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" sx={{boxShadow: '6'}} />
                :
                <Avatar src='src\assets\femaleAvatar.jpg' alt="Female Avatar" sx={{boxShadow: '6'}} />
                }
            </Grid>
            <Grid item xs={10} md={10} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <h2>{item.name}</h2>
                <Button onClick={closeModal} >X</Button>
            </Grid>
            <Grid item md={4} xs={12}>
                <p>CPF: {item.cpf}</p>
            </Grid>
            <Grid item md={4} xs={12}>
                <p>Nascimento: {item.date}</p>
            </Grid>
            <Grid item md={4} xs={12}>
                <p>Sexo: {item.gender}</p>
            </Grid>
            <Grid item xs={12}>
                <p>Endereço: {item.address}</p>
            </Grid>
        </ModalContactsMain>
    </ModalMain>
  )
}

export default ModalContacts