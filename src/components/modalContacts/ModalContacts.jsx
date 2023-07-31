import React, { useContext } from 'react'
import ModalMain from '../modalMain/ModalMain'
import { ContactsContext } from '../../context/ContactsContext'
import { Box, Grid, Avatar } from '@mui/material'

function ModalContacts({id}) {
  const {findContact} = useContext(ContactsContext);
  // localizando o contato
  const contact = findContact(id)

  return (
    <ModalMain>
        <Box sx={{backgroundColor: 'white', borderRadius: '8px', padding: '1.5rem'}} marginY={8} boxShadow={2}>
            <Grid container rowSpacing={2} columnSpacing={4} display={'flex'} justifyContent={'right'} alignItems={'center'}>
                <Grid item xs={12} md={2}>
                    {contact.gender === 'Masculino'? 
                    <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" sx={{boxShadow: '6'}} />
                    :
                    <Avatar src='src\assets\femaleAvatar.jpg' alt="Female Avatar" sx={{boxShadow: '6'}} />
                    }
                </Grid>
                <Grid item xs={12} md={10}>
                    <h2>{contact.name}</h2>
                </Grid>
            </Grid>
        </Box>
    </ModalMain>
  )
}

export default ModalContacts