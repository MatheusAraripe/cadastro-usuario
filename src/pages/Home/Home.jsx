import React, { useContext } from 'react'
import { ContactsContext } from '../../context/ContactsContext'
import { MainContainer, CardInfo, CardInfoDate } from '../../components'
import { Grid } from '@mui/material'
import "./home.css"

function Home() {

  const {getContactsFromLs} = useContext(ContactsContext);
  const contacts = getContactsFromLs().length;

  return (
    <MainContainer title={"Home"}>
      <Grid container rowSpacing={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12} md={6} >
          <img src="src\assets\hero-image.png" alt="Imagem da tela inicial" />
        </Grid>
        <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'left'} flexDirection={'column'} marginBottom={6}>
          <CardInfo info={contacts}/>
          <CardInfoDate />
        </Grid>
     
      </Grid>
    </MainContainer>
  )
}

export default Home