import React from 'react'
import { Box } from '@mui/material'
import { ContactCard, MainContainer } from '../../components'


function Contacts() {
  return (
    <MainContainer title={"Meus Contatos"}>
        <Box my={20}>
            <ContactCard />
        </Box>
    </MainContainer>
  )
}

export default Contacts