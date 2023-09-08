const getContactsFromLs = () => {
    const data = localStorage.getItem("contacts");
    if (data) {
        return JSON.parse(data);
    }
    return [];
};

export default getContactsFromLs;