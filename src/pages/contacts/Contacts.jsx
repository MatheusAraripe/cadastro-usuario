import React from 'react'
import { Box, Container } from '@mui/material'
import { PagesTitle, ContactCard } from '../../components'

function Contacts() {
  return (
  <Container sx={{height: "100vh", paddingTop: "5rem"}} >
        <PagesTitle title={"Meus Contatos"} />
        <Box my={20}>
            <ContactCard />
        </Box>
    </Container>
  )
}

export default Contacts