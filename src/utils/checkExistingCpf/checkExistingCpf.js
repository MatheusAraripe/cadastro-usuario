const checkExistingCpf = (contactCpf, id) =>{
    if (contactCpf === undefined) {
        return undefined;
    } else {
        if (contactCpf.id === id) return undefined;
        return contactCpf;
    }
}

export default checkExistingCpf;