import React from 'react'
import { Box, Grid, Hidden} from '@mui/material'
import { ContactCard, MainContainer, ContactForm } from '../../components'


function Contacts() {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Grid item xl={9} lg={8} md={8} borderRight={2} borderColor={'grey.300'}>
        <MainContainer title={"Meus Contatos"}>
            <Box my={20} >
                <ContactCard />
            </Box>
        </MainContainer>
      </Grid>
      <Hidden mdDown>
        <Grid item xl={3} lg={4} md={4} sx={{backgroundColor: 'purple.main'}} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <ContactForm />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default Contacts