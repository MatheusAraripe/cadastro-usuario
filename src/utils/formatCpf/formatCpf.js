const formatCPF = (cpf) => {
    // Remover caracteres não numéricos do CPF
    const numericCPF = cpf.replace(/\D/g, "");

    // Formatar o CPF com pontos e traço
    const formattedCPF = numericCPF.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        "$1.$2.$3-$4"
    );

    return formattedCPF;
};


export default formatCPF;