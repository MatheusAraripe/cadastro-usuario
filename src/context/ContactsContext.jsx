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


    // guarda contatos no localStorage
    const addContact = (name, cpf, address, date, gender) =>{

        const newContact = {
            id: uuidv4(),
            name,
            cpf,
            address,
            date,
            gender
        }

        setContacts([...contacts, newContact])
        localStorage.setItem('contacts',JSON.stringify(contacts));
    };


    return <ContactsContext.Provider value={{addContact, contacts}}>
        {children}
    </ContactsContext.Provider>
};