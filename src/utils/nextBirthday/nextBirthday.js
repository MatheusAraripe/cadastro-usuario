import birthDateCurrentYear from "./birthDateCurrentYear/birthDateCurrentYear";
import findNearContact from "./findNearContact/findNearContact";
import formatContactDate from "./formatContactDate/formatContactDate";


const nextBirthday = (contacts) => {

    if(contacts[0] === undefined) return null;

    const today = new Date();

    const nearObject = findNearContact(contacts, today);

    const nearDay = nearObject.nearDay
    const nearContact = nearObject.nearDay


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

};


export default nextBirthday;