
import birthDateCurrentYear from "../birthDateCurrentYear/birthDateCurrentYear";
import calculateNearContact from "../calculateNearContact/calculateNearContact";
import formatContactDate from "../formatContactDate/formatContactDate";

const findNearContact = (contacts, currentDate) => {
    let nearContact = null;
    let nearDay = Infinity;
    contacts.forEach((contact) => {
        const contactDate = formatContactDate(contact.date);

        const contactBirthDate = birthDateCurrentYear(currentDate, contactDate)
        const nearObject = calculateNearContact(contactBirthDate, nearDay, nearContact, contact, currentDate)
        nearContact = nearObject.nearContact;
        nearDay = nearObject.nearDay;
    });
    return {nearDay, nearContact}
    
};

export default findNearContact;