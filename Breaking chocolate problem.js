function breakChocolate(n, m) {
    let sq = n * m
    if (sq === 0 || sq === 1) {
        return 0
    } else
        return sq - 1
}