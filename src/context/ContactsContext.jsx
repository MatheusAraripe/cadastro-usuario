import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ContactsContext = createContext();

export const ContactsProvider = ({children}) => {

    const getContactsFromLs = () => {
        const data = localStorage.getItem("contacts")
        if (data){
            return JSON.parse(data);
        }
        return [];
    };

    const [contacts, setContacts] = useState(getContactsFromLs());

   
   // formato do objeto contact
   const newContact = (name, cpf, address, date, gender) => {
    return(
        {
            id: uuidv4(),
            name,
            cpf,
            address,
            date,
            gender
        }
    )
   }

    // guarda contatos no localStorage
    const addContact = (name, cpf, address, date, gender) =>{

        contacts.push(newContact(name, cpf, address, date, gender))
        localStorage.setItem('contacts',JSON.stringify(contacts));
    };

    // filtra por id
    const filterList = (id) => {
        return getContactsFromLs().filter(item => item.id !== id)
    }


    // encontra um contato específico
    const findContact = (id) => {
        return getContactsFromLs().find(item => item.id === id)
    }

    // exclue contato
    const excludeContact = (id) => {
        const updatedList = filterList(id)

        setContacts(updatedList)
        localStorage.setItem('contacts', JSON.stringify(updatedList));
    }


    const editContact = (id, name, cpf, address, date, gender) => {
        const contactArry = getContactsFromLs();
        const contact = contactArry.find(user => user.id === id);
        const index = contactArry.indexOf(contact);
        console.log(index);

        const newEditConatc = {
            id,
            name,
            cpf, 
            address, 
            date, 
            gender
        }

        contactArry[index] = newEditConatc

        setContacts(contactArry)
        localStorage.setItem('contacts', JSON.stringify(contactArry));
    }


    return <ContactsContext.Provider value={{addContact, getContactsFromLs, newContact, excludeContact, filterList, findContact, editContact}}>
        {children}
    </ContactsContext.Provider>
};