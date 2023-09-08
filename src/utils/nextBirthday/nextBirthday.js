import getContactsFromLs from "../getContactsFromLs/getContactsFromLs";

const nextBirthday = () => {
    const contacts = getContactsFromLs();
    const today = new Date();
    let nearContact = null;
    let nearDay = Infinity;

    contacts.forEach((contact) => {
        const dateArry = contact.date.split("/");
        const contactDate = new Date(
            `${dateArry[1]}/${dateArry[0]}/${dateArry[2]}`
        );
        const contactBirthDate = new Date(
            today.getFullYear(),
            contactDate.getMonth(),
            contactDate.getDate()
        );

        const difference = Math.abs(contactBirthDate - today);

        if (difference < nearDay) {
            nearDay = difference;
            nearContact = contact;
        }
    });

    if (nearContact) {
        const nearContactDate = new Date(
            `${nearContact.date.split("/")[1]}/${
                nearContact.date.split("/")[0]
            }/${nearContact.date.split("/")[2]}`
        );
        const nearContacThisYear = new Date(
            today.getFullYear(),
            nearContactDate.getMonth(),
            nearContactDate.getDate()
        );
        const age =
            nearContacThisYear.getFullYear() -
            nearContactDate.getFullYear();
        if (today - nearContacThisYear > 0) return null;

        return {
            name: nearContact.name,
            date: `${nearContact.date.split("/")[0]}/${
                nearContact.date.split("/")[1]
            }`,
            age: age,
        };
    } else {
        return null; // Retorna null se não houver pessoas no array
    }
};


export default nextBirthday;