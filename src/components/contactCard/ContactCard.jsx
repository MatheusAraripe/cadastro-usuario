import { Avatar, Box, Typography } from '@mui/material'
import './contactsCard.css'
import React from 'react'

function ContactCard() {
  return (
    <Box sx={{borderRadius: '10px',boxShadow: 1}} px={5} py={2} >
        <Box py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} className="cardHead">
            <h2>Matheus Araripe Lopes Correa</h2>
            <p>Nascimento: 02/06/2001</p>
        </Box>
        <Box className="mainInfo" >
            <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" className='avatar-card' sx={{boxShadow: '6'}} />
            <p>CPF: 183.021.467.57</p>
            <p>Sexo: Masculino</p>
            <p>Endereço: Av Oswaldo Cruz 139</p>
        </Box>
    </Box>
  )
}

export default ContactCard