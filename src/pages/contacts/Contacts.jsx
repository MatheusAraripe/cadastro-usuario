import React, {useState, useContext, useEffect} from 'react'
import { ContactsContext } from '../../context/ContactsContext';
import { Box, Grid, Hidden} from '@mui/material'
import { ContactCard, MainContainer, ContactForm, ButtonFormResponsive, ContactFormResponsive, ScrollCards, SuccessAlert, ModalContacts, EditContactsModal, InfoAlert, SearchBar, SelectGender, SearchArea} from '../../components'

function Contacts() {

  const {getContactsFromLs} = useContext(ContactsContext);

  const [myContacts, setMyContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //hook para alerta
  const [alert, setAlert] = useState(false)
  const [deletAlert, setDeleteAlert] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false);
  const [infoCpfAlert, setInfoCpfAlert] = useState(false);

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
    {editModalOpen && <EditContactsModal setEditModalOpen={setEditModalOpen} item={item} setMyContacts={setMyContacts} setInfoAlert={setInfoAlert}/>}
    {contactModalOpen &&
    <ModalContacts item={item} setContactModalOpen={setContactModalOpen}/>
    }

    {alert && <SuccessAlert message={"adicionado"}/>}
    {deletAlert && <SuccessAlert message={"deletado"}/>}
    {infoAlert && <InfoAlert mesage={"Você editou as informações de um contato"} type={"info"}/>}
    {infoCpfAlert && <InfoAlert mesage={"CPF ja cadastrado"} type={"error"}/>}

    <Grid container justifyContent={'center'} alignItems={'center'}>
    {isOpen && <ContactFormResponsive setIsOpen={setIsOpen}/>}
      <Grid item xl={9} lg={8} md={8} sm={12} xs={12} borderRight={2} borderColor={'grey.300'}>
        <Hidden mdUp>
            <Box sx={{position: 'absolute', right: 0, margin: '2.5rem'}}>
              <ButtonFormResponsive setIsOpen={setIsOpen}/>
            </Box>
        </Hidden>
        <MainContainer title={"Meus Contatos"}>
            <Box my={15} >

              <SearchArea setMyContacts={setMyContacts} searchValue={searchValue} setSearchValue={setSearchValue}/>

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
                    setDeleteAlert={setDeleteAlert}
                    />
                  )
                })}
              </ScrollCards>
            </Box>
        </MainContainer>
      </Grid>
      <Hidden mdDown>
        <Grid item xl={3} lg={4} md={4} sx={{backgroundColor: 'secondary.light'}} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <ContactForm setMyContacts={setMyContacts} setAlert={setAlert} setInfoCpfAlert={setInfoCpfAlert}/>
        </Grid>
      </Hidden>
    </Grid>
    </>
  )
}

export default Contacts
