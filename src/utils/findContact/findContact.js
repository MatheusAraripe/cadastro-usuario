import getContactsFromLs from "../getContactsFromLs/getContactsFromLs";

// encontra um contato específico
const findContact = (id) => {
    return getContactsFromLs().find((item) => item.id === id);
};

export default findContact;