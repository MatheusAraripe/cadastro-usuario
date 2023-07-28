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
    
   // const [contacts, setContacts] = useState(getContactsFromLs);

    const makeNewContact = (name, cpf, address, date, gender) => {
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

        const contacts = getContactsFromLs();

        contacts.push(makeNewContact(name, cpf, address, date, gender))
        localStorage.setItem('contacts',JSON.stringify(contacts));
    };


    return <ContactsContext.Provider value={{addContact, getContactsFromLs, makeNewContact}}>
        {children}
    </ContactsContext.Provider>
};