function digitalRoot(n) {
    let arr = n.toString().split('')
    let sum = arr.reduce((prev, cur) => +prev + +cur, 0)
    if (sum.toString().length === 1) {
        return sum
    } else {
        return digitalRoot(sum)
    }
}