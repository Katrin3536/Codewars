function solve(s) {
    let arr = s.split('')
    let upperCase = 0
    let lowerCase = 0
    let number = 0
    let special = 0

    arr.forEach(item => {
        if (/[A-Z]/.test(item)) {
            upperCase++
        } else if (/[a-z]/.test(item)) {
            lowerCase++
        } else if (/[0-9]/.test(item)) {
            number++
        } else {
            special++
        }
    })
    return [upperCase, lowerCase, number, special]
}