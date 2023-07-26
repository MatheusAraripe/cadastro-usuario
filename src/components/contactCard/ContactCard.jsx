import { Avatar, Box } from '@mui/material'
import './contactsCard.css'
import React from 'react'

function ContactCard({name, address, cpf, gender, date}) {
  return (
    <Box sx={{borderRadius: '10px',boxShadow: 1}} px={5} py={2} my={3}>
        <Box py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} className="cardHead">
            <h2>{name}</h2>
            <p>Nascimento: {date}</p>
        </Box>
        <Box className="mainInfo" >
            <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" className='avatar-card' sx={{boxShadow: '6'}} />
            <p>CPF: {cpf}</p>
            <p>Sexo: {gender}</p>
            <p>Endereço: {address}</p>
        </Box>
    </Box>
  )
}

export default ContactCard