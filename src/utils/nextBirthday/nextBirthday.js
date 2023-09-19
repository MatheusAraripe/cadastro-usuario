import getContactsFromLs from "../getContactsFromLs/getContactsFromLs";
import birthDateCurrentYear from "./birthDateCurrentYear";
import findNearContact from "./findNearContact";
import formatContactDate from "./formatContactDate";


const nextBirthday = () => {
    const contacts = getContactsFromLs();
    const today = new Date();

    const nearObject = findNearContact({contacts: contacts, currentDate: today, nearDay: nearDay, nearContact: nearContact});

    const nearDay = nearObject.nearDay
    const nearContact = nearObject.nearDay

    if (nearContact) {
        const nearContactDate = formatContactDate(nearContact.date);

        const nearContacThisYear = birthDateCurrentYear(today, nearContactDate);

        if (today - nearContacThisYear > 0) return null;

        const age =
            nearContacThisYear.getFullYear() -
            nearContactDate.getFullYear();
        

        return {
            name: nearContact.name,
            date: `${nearContact.date.split("/")[0]}/${
                nearContact.date.split("/")[1]
            }`,
            age: age,
        };
    }
    return null;
};


export default nextBirthday;