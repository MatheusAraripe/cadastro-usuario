import React, {useState, useContext, useEffect} from 'react'
import { ContactsContext } from '../../context/ContactsContext';
import { Box, Grid, Hidden} from '@mui/material'
import { ContactCard, MainContainer, ContactForm, ButtonFormResponsive, ContactFormResponsive, ScrollCards, SuccessAlert, ModalContacts, EditContactsModal} from '../../components'

function Contacts() {

  const {getContactsFromLs} = useContext(ContactsContext);

  const [myContacts, setMyContacts] = useState([]);

  //hook para alerta
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setMyContacts(getContactsFromLs())
  },[]);

  // botão para formulário responsivo
  const [isOpen, setIsOpen] = useState(false);

  // hook para modal de contato
  const [contactModalOpen, setContactModalOpen] = useState(false);

  //hook para modal de editar
  const [editModalOpen, setEditModalOpen] = useState(false);


  const [item, setItem] = useState({});

  return (
    <>
    {editModalOpen && <EditContactsModal setEditModalOpen={setEditModalOpen} item={item} setMyContacts={setMyContacts}/>}
    {contactModalOpen && 
    <ModalContacts item={item} setContactModalOpen={setContactModalOpen}/>
    }

    {alert && <SuccessAlert/>}

    <Grid container justifyContent={'center'} alignItems={'center'}>
    {isOpen && <ContactFormResponsive setIsOpen={setIsOpen}/>}
      <Grid item xl={9} lg={8} md={8} sm={12} xs={12} borderRight={2} borderColor={'grey.300'}>
        <Hidden mdUp>
            <Box sx={{position: 'absolute', right: 0, margin: '2.5rem'}}>
              <ButtonFormResponsive setIsOpen={setIsOpen}/>
            </Box>
        </Hidden>
        <MainContainer title={"Meus Contatos"}>
            <Box my={20} >
              <ScrollCards>
                {myContacts.map((item, index) => {
                  return(
                    <ContactCard
                    key={index}
                    item={item}
                    setMyContacts={setMyContacts}
                    setContactModalOpen={setContactModalOpen}
                    setEditModalOpen={setEditModalOpen}
                    setItem={setItem}
                    />
                  )
                })}
              </ScrollCards>
            </Box>
        </MainContainer>
      </Grid>
      <Hidden mdDown>
        <Grid item xl={3} lg={4} md={4} sx={{backgroundColor: 'secondary.light'}} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <ContactForm setMyContacts={setMyContacts} setAlert={setAlert}/>
        </Grid>
      </Hidden>
    </Grid>
    </>
  )
}

export default Contacts