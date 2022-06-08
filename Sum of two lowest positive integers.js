function sumTwoSmallestNumbers(numbers) {
    let filterNumbers = numbers.sort((a, b) => a < b ? -1 : 1)
    return filterNumbers[0] + filterNumbers[1]
}