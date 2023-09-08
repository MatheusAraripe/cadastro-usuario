import getContactsFromLs from "../getContactsFromLs/getContactsFromLs";

// filtra por id
const filterList = (id) => {
    return getContactsFromLs().filter((item) => item.id !== id);
};

export default filterList;
