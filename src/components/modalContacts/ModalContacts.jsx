import React from 'react'
import ModalMain from '../modalMain/ModalMain'
import ModalContactsMain from './ModalContactsMain'
import { Grid, Avatar, Button } from '@mui/material'
import CancelPresentationTwoToneIcon from '@mui/icons-material/CancelPresentationTwoTone';

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
                <Button onClick={closeModal} ><CancelPresentationTwoToneIcon color='error'/></Button>
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
            <Grid item xs={12} md={4}>
                <p>CEP: {item.cep}</p>
            </Grid>
            <Grid item xs={12} md={8} >
                <p>Rua: {item.street}</p>
            </Grid>
            <Grid item xs={12} md={4}>
                <p>Número: {item.number}</p>
            </Grid>
            <Grid item xs={12} md={8}>
                <p>Complemento: {item.complement}</p>
            </Grid>
            <Grid item xs={12} md={6}>
                <p>Cidade: {item.city}</p>
            </Grid>
            <Grid item xs={12} md={6}>
                <p>Estado: {item.estate}</p>
            </Grid>
        </ModalContactsMain>
    </ModalMain>
  )
}

export default ModalContacts