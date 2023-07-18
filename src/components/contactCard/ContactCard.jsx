import { Avatar, Box } from '@mui/material'
import './contactsCard.css'
import React from 'react'

function ContactCard() {
  return (
    <Box className= 'cardContainer' px={5} py={2}>
        <Box py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <h2>Matheus Araripe Lopes Correa</h2>
            <p>Nascimento: 02/06/2001</p>
        </Box>
        <Box display={"flex"} justifyContent={'start'} alignItems={'center'} className="mainInfo">
            <Avatar sx={{marginRight: "3rem"}}>M</Avatar>
            <p>CPF: 183.021.467.57</p>
            <p>Sexo: Masculino</p>
            <p>Endereço: Av Oswaldo Cruz 139</p>
        </Box>
    </Box>
  )
}

export default ContactCard