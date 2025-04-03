function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "")
    return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`
}

function createSlug(stringa) {
    return stringa.toLowerCase().replaceAll(" ", "-")
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


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome

}