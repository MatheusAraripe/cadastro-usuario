import React, {useState, useContext, useEffect} from 'react'
import { ContactsContext } from '../../context/ContactsContext';
import { Box, Grid, Hidden} from '@mui/material'
import { ContactCard, MainContainer, ContactForm, ButtonFormResponsive, ContactFormResponsive} from '../../components'

function Contacts() {

  const {getContactsFromLs} = useContext(ContactsContext);

  const [myContacts, setMyContacts] = useState([]);

  useEffect(() => {
    setMyContacts(getContactsFromLs())
  },[]);

  // botão para formulário responsivo
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              <div style={{ maxHeight: '450px', overflowY: 'scroll', border: '1px solid #ccc', padding: '1rem'}}>
                {myContacts.map((item, index) => {
                  return(
                    <ContactCard
                    key={index}
                    name={item.name}
                    cpf={item.cpf}
                    address={item.address}
                    gender={item.gender}
                    date={item.date}
                    />
                  )
                })}
              </div>
            </Box>
        </MainContainer>
      </Grid>
      <Hidden mdDown>
        <Grid item xl={3} lg={4} md={4} sx={{backgroundColor: 'purple.main'}} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <ContactForm setMyContacts={setMyContacts}/>
        </Grid>
      </Hidden>
    </Grid>
    </>
  )
}

export default Contacts