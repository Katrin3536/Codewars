function rentalCarCost(d) {
    let sum = 40 * d
    if (d >= 7) {
        sum -= 50
    } else if (d >= 3) {
        sum -= 20
    }
    return sum
}