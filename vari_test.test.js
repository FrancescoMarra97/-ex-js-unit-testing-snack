const { getInitials, createSlug } = require("./vari_test")

// Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("MR")
    expect(getInitials("giovanni neri")).toBe("GN")
    expect(getInitials("anna   Bianchi")).toBe("AB")
})


//Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("CIAO")).toBe("ciao")
})