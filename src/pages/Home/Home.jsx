import React, { useContext } from 'react'
import { ContactsContext } from '../../context/ContactsContext'
import { MainContainer, CardInfo } from '../../components'
import { Grid } from '@mui/material'

function Home() {

  const {getContactsFromLs} = useContext(ContactsContext);
  const contacts = getContactsFromLs().length;
  return (
    <MainContainer title={"Home"}>
      <Grid container rowSpacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <CardInfo info={contacts}/>
        <CardInfo />
      </Grid>
    </MainContainer>
  )
}

export default Home