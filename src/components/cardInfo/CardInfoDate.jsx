import { Grid } from '@mui/material'
import CakeTwoToneIcon from '@mui/icons-material/CakeTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import { ContactsContext } from '../../context/ContactsContext';
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'

function CardInfoDate() {

  const {nextBirthday} = useContext(ContactsContext);

  const contact = nextBirthday();

  if (contact === null) {
    return(
      <Grid
      container
      rowSpacing={1}
      sx={{display: 'flex', justifyContent: 'left', alignItems: 'center', borderRadius: '5px'}} marginTop={4} boxShadow={2} maxWidth={'400px'} p={1}
      >
         <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <SentimentDissatisfiedTwoToneIcon sx={{color: 'orange.dark'}} fontSize='large'/>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <p>Nao encontramos nenhum aniversario proximo</p>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid
    container
    rowSpacing={1}
    sx={{display: 'flex', justifyContent: 'left', alignItems: 'center', borderRadius: '5px'}} marginTop={4} boxShadow={2} maxWidth={'400px'} p={1}
    >
          <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <CakeTwoToneIcon sx={{color: 'orange.dark'}} fontSize='large'/>
          </Grid>
          <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <p>{contact.name} faz <strong>{contact.age}</strong> anos no dia <strong>{contact.date}</strong></p>
          </Grid>
    </Grid>
  )
}

export default CardInfoDate
