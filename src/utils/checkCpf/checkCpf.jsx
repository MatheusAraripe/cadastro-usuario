import checkExistingCpf from "../checkExistingCpf/checkExistingCpf";
import extractCpfNumbers from "../extractCpfNumbers/extractCpfNumbers";

const checkCpf = (cpf, id = false, contacts) => {
    const contactCpf = contacts.find(
        (item) => extractCpfNumbers(item.cpf) === cpf
    );

    if (id === false) return contactCpf;
    return checkExistingCpf(contactCpf, id);
};

export default checkCpf;
