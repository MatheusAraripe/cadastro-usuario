const birthDateCurrentYear = (currentDate, contactDate) =>{
    const contactBirthDate = new Date(
        currentDate.getFullYear(),
        contactDate.getMonth(),
        contactDate.getDate()
    );


    return contactBirthDate;
}

export default birthDateCurrentYear;