import React from 'react'
import { MainContainer, ContactForm } from '../../components'

function NewContact() {
  return (
    <div>
      <MainContainer title={"Adicione um novo contato"} >
        <ContactForm />
      </MainContainer>
    </div>
  )
}

export default NewContact