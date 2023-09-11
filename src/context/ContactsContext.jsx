import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { filterList, formatCPF, getContactsFromLs } from "../utils";

export const ContactsContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState(getContactsFromLs());

    // formato do objeto contact
    const newContact = (
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
    ) => {
        return {
            id: uuidv4(),
            name,
            cpf: formatCPF(cpf),
            cep,
            street,
            number,
            neighborhood,
            city,
            estate,
            complement,
            date,
            gender,
        };
    };

    // guarda contatos no localStorage
    const addContact = (
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
    ) => {
        setContacts((prevState) =>
            prevState.concat(
                newContact(
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
                )
            )
        );
        localStorage.setItem("contacts", JSON.stringify(contacts));
    };

    // exclue contato
    const excludeContact = (id) => {
        const updatedList = contacts.filter((item) => item.id !== id);

        setContacts(updatedList);
        localStorage.setItem("contacts", JSON.stringify(updatedList));
    };

    const editContact = (
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
    ) => {
        const contactArry = contacts;
        const contact = contactArry.find((user) => user.id === id);
        const index = contactArry.indexOf(contact);

        const newEditConatc = {
            id,
            name,
            cpf: formatCPF(cpf),
            cep,
            street,
            number,
            neighborhood,
            city,
            estate,
            complement,
            date,
            gender,
        };

        contactArry[index] = newEditConatc;

        setContacts(contactArry);
        localStorage.setItem("contacts", JSON.stringify(contactArry));
    };

    const searchContact = (info) => {
        const contactArry = getContactsFromLs();
        const filterContactsByInfo = contactArry.filter((item) =>
            item.name.toLowerCase().includes(info.toLowerCase())
        );
        return filterContactsByInfo;
    };

    const filterContactsGender = (gender, searchValue) => {
        if (gender === "all") return searchContact(searchValue);
        return searchContact(searchValue).filter(
            (item) => item.gender === gender
        );
    };

    return (
        <ContactsContext.Provider
            value={{
                addContact,
                contacts,
                newContact,
                excludeContact,
                editContact,
                searchContact,
                filterContactsGender,
            }}
        >
            {children}
        </ContactsContext.Provider>
    );
};
