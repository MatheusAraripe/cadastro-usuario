const formatContactDate = (contactDate) =>{
    console.log("opaaaa", contactDate);
    const dateArry = contactDate.split("/");
    const formatDate = new Date(
        `${dateArry[1]}/${dateArry[0]}/${dateArry[2]}`
    );

    return formatDate;
}

export default formatContactDate;