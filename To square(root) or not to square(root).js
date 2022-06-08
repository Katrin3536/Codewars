function squareOrSquareRoot(array) {
    let arrayA = []
    array.forEach(i => {
        if (Number.isInteger(Math.sqrt(i))) {
            arrayA.push(Math.sqrt(i))
        } else
            arrayA.push(Math.pow(i, 2))
    })
    return arrayA
}