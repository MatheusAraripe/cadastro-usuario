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

    // const nextBirthday = () => {
    //     const contacts = getContactsFromLs();
    //     const today = new Date();
    //     let nearContact = null;
    //     let nearDay = Infinity;
    
    //     contacts.forEach(contact => {
    //         const contactDate = new Date(contact.date);
    //         const contactBirthDate = new Date(today.getFullYear(), contactDate.getMonth(), contactDate.getDate());
    
    //         const difference = Math.abs(contactBirthDate - today);
    
    //         if (difference < nearDay) {
    //             nearDay = difference;
    //             nearContact = contact;
    //         }
    //     });
    
    //     if (nearContact) {
    //         const nearContactDate = new Date(nearContact.date);
    //         const nearContacThisYear = new Date(today.getFullYear(), nearContactDate.getMonth(), nearContactDate.getDate());
    //         const age = nearContacThisYear.getFullYear() - nearContactDate.getFullYear();
    
    //         return {
    //             name: nearContact.name,
    //             age: age,
    //         };
    //     } else {
    //         return null; // Retorna null se não houver pessoas no array
    //     }
    // };
    
   // formato do objeto contact
   const newContact = (name, cpf, cep, street, number, neighborhood, city, estate, complement, date, gender) => {
    return(
        {
            id: uuidv4(),
            name,
            cpf,
            cep,
            street, 
            number, 
            neighborhood, 
            city, 
            estate, 
            complement,
            date,
            gender
        }
    )
   }

    // guarda contatos no localStorage
    const addContact = (name, cpf, cep, street, number, neighborhood, city, estate, complement,date, gender) =>{

        contacts.push(newContact(name, cpf, cep, street, number, neighborhood, city, estate, complement,date, gender))
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