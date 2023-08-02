import { Avatar, Box, Button } from '@mui/material'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import './contactsCard.css'
import { ContactsContext } from '../../context/ContactsContext';
import React,{useContext} from 'react'

function ContactCard({item, setMyContacts, setContactModalOpen, setEditModalOpen, setItem}) {

 const {excludeContact, filterList, findContact} = useContext(ContactsContext);

 const id = item.id

 // localiza o contato
//  const contact = findContact(id);

 const deleteContact = () => {
  // hook apenas para renderizar os contatos de maneira automática na tela
  setMyContacts(filterList(id));
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
    <Box sx={{borderRadius: '10px',boxShadow: 1, cursor: 'pointer'}} px={5} py={2} my={3} onClick={openContactModal}>
        <Box py={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'} className="cardHead">
            <h2>{item.name}</h2>
            <p>Nascimento: {item.date}</p>
        </Box>
        <Box className="mainInfo" >
            {item.gender === 'Masculino'? 
              <Avatar src='src\assets\maleAvatar.jpg' alt="Male Avatar" className='avatar-card' sx={{boxShadow: '6'}} />
              :
              <Avatar src='src\assets\femaleAvatar.jpg' alt="Male Avatar" className='avatar-card' sx={{boxShadow: '6'}} />
            }
            <p>CPF: {item.cpf}</p>
            <p>Sexo: {item.gender}</p>
            <p>Endereço: {item.address}</p>
            <Button onClick={openEditModal} sx={{borderRadius: '100px'}}><EditTwoToneIcon sx={{color: 'green.text', cursor: 'pointer'}}/></Button>
            <Button onClick={deleteContact} sx={{borderRadius: '100px'}}><DeleteForeverTwoToneIcon color='error' sx={{cursor: 'pointer'}} /></Button>
        </Box>
    </Box>
  )
}

export default ContactCard