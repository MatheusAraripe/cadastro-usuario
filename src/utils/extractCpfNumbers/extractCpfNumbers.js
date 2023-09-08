const extractCpfNumbers = (cpf) => {
    // Remover todos os caracteres não numéricos do CPF
    const numericCPF = cpf.replace(/\D/g, "");

    return numericCPF;
};

export default extractCpfNumbers;