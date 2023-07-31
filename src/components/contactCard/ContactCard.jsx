import { Avatar, Box, Button } from '@mui/material'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import './contactsCard.css'
import { ContactsContext } from '../../context/ContactsContext';
import React,{useContext} from 'react'

function ContactCard({id, name, address, cpf, gender, date, setMyContacts}) {

 const {excludeContact, filterList} = useContext(ContactsContext);
 const deleteContact = () => {

  // hook apenas para renderizar os contatos de maneira automática na tela
  setMyContacts(filterList(id));
  // exclui contato
  excludeContact(id);
 }

  return (
    <Box sx={{borderRadius: '10px',boxShadow: 1}} px={5} py={2} my={3}>
        <Box py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} className="cardHead">
            <h2>{name}</h2>
            <p>Nascimento: {date}</p>
        </Box>
        <Box className="mainInfo" >
            {gender === 'Masculino'? 
              <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" className='avatar-card' sx={{boxShadow: '6'}} />
              :
              <Avatar src='src\assets\femaleAvatar.jpg' alt="Male Avatar" className='avatar-card' sx={{boxShadow: '6'}} />
            }
            <p>CPF: {cpf}</p>
            <p>Sexo: {gender}</p>
            <p>Endereço: {address}</p>
            <EditTwoToneIcon sx={{color: 'green.text', cursor: 'pointer'}}/>
            <Button onClick={deleteContact} sx={{borderRadius: '100px'}}><DeleteForeverTwoToneIcon color='error' sx={{cursor: 'pointer'}} /></Button>
        </Box>
    </Box>
  )
}

export default ContactCard