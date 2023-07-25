import React from 'react'
import ContactForm from './ContactForm'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Box, IconButton} from '@mui/material'

function ContactFormResponsive() {
  return (
    <Box sx={{
        position: 'fixed',
        zIndex: 1,
        backgroundColor: 'background.modal', 
        display: 'flex', 
        justifyContent: 'center', 
        alignContent: 'center', 
        width: '100vw',
        height: '100vh'
        }}>

        <Box sx={{position: 'absolute', right: 0, margin: '2.5rem'}}>
            <IconButton sx={{color: 'blue.dark', backgroundColor: 'blue.main', boxShadow: 2}}>
                <CloseTwoToneIcon fontSize='small' />
            </IconButton>
        </Box>

        <Box sx={{
        margin: '1.5rem',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
        }}>
            <ContactForm/>
        </Box>
    </Box>
  )
}

export default ContactFormResponsive