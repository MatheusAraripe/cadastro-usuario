import extractCpfNumbers from "../extractCpfNumbers/extractCpfNumbers";

const checkCpf = (cpf, id = false, contacts) => {
    if (id === false)
        return contacts.find((item) => extractCpfNumbers(item.cpf) === cpf);

    const contactCpf = contacts.find(
        (item) => extractCpfNumbers(item.cpf) === cpf
    );
    if (contactCpf === undefined) {
        return undefined;
    } else {
        if (contactCpf.id === id) return undefined;
        return contactCpf;
    }
};

export default checkCpf;
