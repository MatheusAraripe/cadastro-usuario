import React from 'react'
import { Box, Grid } from '@mui/material'
import { ContactCard, MainContainer, ContactForm } from '../../components'


function Contacts() {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Grid item md={9} borderRight={2} borderColor={'grey.300'}>
        <MainContainer title={"Meus Contatos"}>
            <Box my={20} >
                <ContactCard />
            </Box>
        </MainContainer>
      </Grid>
      <Grid item md={3} sx={{backgroundColor: 'purple.main'}} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <ContactForm />
      </Grid>
    </Grid>
  )
}

export default Contacts