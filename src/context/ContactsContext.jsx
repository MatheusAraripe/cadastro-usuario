import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ContactsContext = createContext();

export const ContactsProvider = ({children}) => {

    const getContactsFromLs = () => {
        const data = localStorage.getItem("contacts")
        if (data){
            return JSON.parse(data)
        }
        return [];
    };
    
    const [contacts, setContacts] = useState(getContactsFromLs);


    // guarda contatos no localStorage
    const addUser = (name) =>{

        const newContact = {
            id: uuidv4(),
            name,
        }

        contacts.push(newContact)
        localStorage.setItem('contacts',JSON.stringify(contacts));
    };


    return <ContactsContext.Provider>
        {children}
    </ContactsContext.Provider>
};