import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { Avatar, Button, Grid, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import useContactContext from '../../context/useContactContext';


const useStyles = makeStyles({
  cardBox:{
      '&:hover':{
          boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }
  }
});

function ContactCard({item, setMyContacts, setContactModalOpen, setEditModalOpen, setItem, setDeleteAlert}) {

 const {excludeContact, filterList} = useContactContext();

 const classes = useStyles();

 const id = item.id

 const deleteContact = (e) => {
  e.stopPropagation();
  // hook apenas para renderizar os contatos de maneira automática na tela
  setMyContacts(filterList(id));

  //define o alerta como true depois do tempo acabar volta para false
  setDeleteAlert(true)
  setTimeout(() => {
    setDeleteAlert(false);
  }, 4000);
  
  // exclui contato
  excludeContact(id);
 }

 const openContactModal = () => {
  setItem(item)
  setContactModalOpen(true);
 }

 const openEditModal = (e) => {
  e.stopPropagation();
  setItem(item);
  setEditModalOpen(true);
 }

  return (
    <Grid container rowSpacing={2} className={classes.cardBox} sx={{borderRadius: '10px',boxShadow: 1, cursor: 'pointer'}} px={5} py={2} my={3} onClick={openContactModal}>
        <Grid item xs={12} sm={9} display={'flex'} justifyContent={'start'} alignItems={'center'} py={1}>
            <h2>{item.name}</h2>
        </Grid>
        <Hidden smDown>
          <Grid item sm={3} display={'flex'} justifyContent={'end'} alignItems={'center'} py={1}>
            <Button onClick={openEditModal} sx={{borderRadius: '100px'}}><EditTwoToneIcon sx={{color: 'green.text', cursor: 'pointer'}}/></Button>
            <Button onClick={deleteContact} sx={{borderRadius: '100px'}}><DeleteForeverTwoToneIcon color='error' sx={{cursor: 'pointer'}} /></Button>
          </Grid>
        </Hidden>
        <Grid item xs={6} sm={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
            {item.gender === 'Masculino'?
              <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar"  sx={{boxShadow: '6'}} />
              :
              <Avatar src='src\assets\femaleAvatar.jpg' alt="Male Avatar"  sx={{boxShadow: '6'}} />
            }
        </Grid>
        <Grid item xs={6} sm={10} md={3} display={'flex'} justifyContent={{xs: 'end', md: 'start'}} alignItems={'center'}>
          <p>CPF: {item.cpf}</p>
        </Grid>
        <Grid item xs={9} sm={9} md={4} display={'flex'} justifyContent={'start'} alignItems={'center'}>
          <p>Cidade: {item.city}</p>
        </Grid>
        <Grid item xs={3} sm={3} md={3} display={'flex'} justifyContent={{xs: 'center', md: 'start'}} alignItems={'center'}>
          <p>Estado: {item.estate}</p>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={1}>
            <Button onClick={openEditModal} sx={{borderRadius: '100px'}}><EditTwoToneIcon sx={{color: 'green.text', cursor: 'pointer'}}/></Button>
            <Button onClick={deleteContact} sx={{borderRadius: '100px'}}><DeleteForeverTwoToneIcon color='error' sx={{cursor: 'pointer'}} /></Button>
          </Grid>
        </Hidden>
    </Grid>
  )
}

export default ContactCard
