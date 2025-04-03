const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./vari_test")

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


//Snack 6 
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug()).toThrow('titolo non valido')
    expect(() => createSlug(null)).toThrow('titolo non valido')
})

const posts = [
    { id: 1, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" },
    { id: 2, title: "Guida a Node.js", slug: "guida-a-nodejs" },
    { id: 3, title: "Testing con Jest", slug: "testing-con-jest" },
    { id: 4, title: "Consigli per scrivere codice pulito", slug: "consigli-codice-pulito" }
]



//Snack 7 
test('La funzione findPostById restituisce il post corretto dato l array di post e l id', () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Guida a Node.js", slug: "guida-a-nodejs" })
    expect(findPostById(posts, 5)).toBe(null)
    expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id')
    expect(() => findPostById([34, 67], 2)).toThrow('l array posts non è nel fomrato corretto')

})