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

    // exclue contato
    const excludeContact = (id) => {
        const contactArry = getContactsFromLs();
        const updatedList = contactArry.filter(item => item.id !== id);

        setContacts(updatedList)
        localStorage.setItem('contacts', JSON.stringify(updatedList));
    }


    return <ContactsContext.Provider value={{addContact, getContactsFromLs, newContact, excludeContact}}>
        {children}
    </ContactsContext.Provider>
};