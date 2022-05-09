var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears === 1) {
        return [1, 15, 15]
    } else if (humanYears === 2) {
        return [2,24,24]
    }
    return [humanYears,16+4*humanYears, 14+5*humanYears]
}
