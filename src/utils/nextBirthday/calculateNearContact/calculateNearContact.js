const calculateNearContact = (contactBirthDate, nearDay, nearContact, contact, today) =>{
    const difference = Math.abs(contactBirthDate - today);

    if (difference < nearDay) {
        nearDay = difference;
        nearContact = contact;
    }
    console.log(nearContact);
    return {nearDay, nearContact}
};
export default calculateNearContact;