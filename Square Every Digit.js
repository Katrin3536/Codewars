function squareDigits(num) {
    return +num.toString().split('').map(x => Math.pow(x, 2)).join('')
}