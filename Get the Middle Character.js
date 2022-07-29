function getMiddle(s) {
    let number = s.length

    if (number === 1) {
        return s
    } else if (number % 2 === 0) {
        return s[number / 2 - 1] + s[number / 2]
    } else {
        return s[(number - 1) / 2]
    }
}