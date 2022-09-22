var number = function (busStops) {
    let sum = 0;
    busStops.flat().map((item, index) => {
        if (index % 2 === 0) {
            sum = sum + item
        } else if (index % 2 !== 0)
            sum = sum - item
    })
    return sum
}