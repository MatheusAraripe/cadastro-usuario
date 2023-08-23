import React from 'react'
import ContactForm from './ContactForm'
import ModalMain from '../modalMain/ModalMain';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Box, IconButton} from '@mui/material'

function ContactFormResponsive({setIsOpen, setMyContacts, setAlert, setInfoCpfAlert}) {
  return (
    <ModalMain>
        <Box sx={{position: 'absolute', right: 0, margin: '2.5rem'}}>
            <IconButton sx={{color: 'blue.dark', backgroundColor: 'blue.main', boxShadow: 2}} onClick={()=>setIsOpen(false)}>
                <CloseTwoToneIcon fontSize='small' />
            </IconButton>
        </Box>

        <Box
        boxShadow={2}
        sx={{
        margin: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple.main',
        borderRadius: '5px',
        }}>
            <ContactForm setMyContacts={setMyContacts} setAlert={setAlert} setInfoCpfAlert={setInfoCpfAlert}/>
        </Box>
    </ModalMain>
  )
}

export default ContactFormResponsive
