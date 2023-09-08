import extractCpfNumbers from "../extractCpfNumbers/extractCpfNumbers";
import getContactsFromLs from "../getContactsFromLs/getContactsFromLs";

const checkCpf = (cpf, id = false) => {
    if (id === false)
        return getContactsFromLs().find(
            (item) => extractCpfNumbers(item.cpf) === cpf
        );

    const contactCpf = getContactsFromLs().find(
        (item) => extractCpfNumbers(item.cpf) === cpf
    );
    console.log(contactCpf);
    if (contactCpf === undefined) {
        return undefined;
    } else {
        if (contactCpf.id === id) return undefined;
        return contactCpf;
    }
};


export default checkCpf;