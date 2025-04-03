function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "")
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

function createSlug(stringa) {
    return stringa.toLowerCase()
}


module.exports = {
    getInitials,
    createSlug,
}