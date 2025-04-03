function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "")
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

function createSlug(titolo) {
    if (!titolo) {
        throw new Error("titolo non valido");
    }
    return titolo.toLowerCase().replaceAll(" ", "-")
}

function average(nums) {
    nums.forEach(num => {
        if (isNaN(num)) {
            throw new Error("Average vuole solo numeri");
        }
    });
    return nums.reduce((acc, num) => acc + num, 0) / nums.length
}

function isPalindrome(str) {
    reversedStr = str.trim().split("").reverse().join("")
    return str.trim() === reversedStr
}

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`);
    }
    posts.forEach(p => {
        if (p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("l array posts non è nel fomrato corretto");

        }
    })
    return posts.find(p => p.id === id) || null
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById

}