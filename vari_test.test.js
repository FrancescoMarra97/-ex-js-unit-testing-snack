const { getInitials, createSlug, average, isPalindrome } = require("./vari_test")

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


//Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([2, 4])).toBe(3)
    expect(average([5, 10, 15, 20, 30])).toBe(16)
    expect(() => average([2, "ok"])).toThrow()
})



//Snack 4
test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
})


//Snack 5
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("osso  ")).toBeTruthy()
    expect(isPalindrome("ciao")).toBeFalsy()
})