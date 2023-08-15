import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ContactsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContactsProvider = ({children}) => {

    const getContactsFromLs = () => {
        const data = localStorage.getItem("contacts")
        if (data){
            return JSON.parse(data);
        }
        return [];
    };

    const [contacts, setContacts] = useState(getContactsFromLs());

    const nextBirthday = () => {
      const contacts = getContactsFromLs();
      const today = new Date();
      let nearContact = null;
      let nearDay = Infinity;

      contacts.forEach(contact => {
             const dateArry = contact.date.split('/');
             const contactDate = new Date(`${dateArry[1]}/${dateArry[0]}/${dateArry[2]}`);
             const contactBirthDate = new Date(today.getFullYear(), contactDate.getMonth(), contactDate.getDate());

             const difference = Math.abs(contactBirthDate - today);

             if (difference < nearDay) {
                 nearDay = difference;
                 nearContact = contact;
             }
         });


         if (nearContact) {
             const nearContactDate = new Date(`${nearContact.date.split("/")[1]}/${nearContact.date.split("/")[0]}/${nearContact.date.split("/")[2]}`);
             const nearContacThisYear = new Date(today.getFullYear(), nearContactDate.getMonth(), nearContactDate.getDate());
             const age = nearContacThisYear.getFullYear() - nearContactDate.getFullYear();
             if (today - nearContacThisYear > 0) return null;

             return {
                 name: nearContact.name,
                 date: `${nearContact.date.split("/")[0]}/${nearContact.date.split("/")[1]}`,
                 age: age,
             };
         } else {
             return null; // Retorna null se não houver pessoas no array
         }
    };

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


    const editContact = (id, name, cpf, cep, street, number, neighborhood, city, estate, complement,date, gender) => {
        const contactArry = getContactsFromLs();
        const contact = contactArry.find(user => user.id === id);
        const index = contactArry.indexOf(contact);

        const newEditConatc = {
            id,
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

        contactArry[index] = newEditConatc

        setContacts(contactArry)
        localStorage.setItem('contacts', JSON.stringify(contactArry));
    }

    const searchContact = (info) => {
        const contactArry = getContactsFromLs();
        const filterContactsByInfo = contactArry.filter(
            item => item.name.toLowerCase().includes(info.toLowerCase()) || 
            item.cpf.toLowerCase().includes(info.toLowerCase()) || 
            item.city.toLowerCase().includes(info.toLowerCase())
            );
        return filterContactsByInfo;
    }


    return <ContactsContext.Provider value={{addContact, getContactsFromLs, newContact, excludeContact, filterList, findContact, editContact, searchContact, nextBirthday}}>
        {children}
    </ContactsContext.Provider>
};
