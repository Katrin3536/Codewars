function vowelIndices(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let arrayLowerCaseLetter = word.toLowerCase().split('')
    let newArray = []
    arrayLowerCaseLetter.forEach((i, index) => {
        if (vowels.includes(i)) {
            newArray.push(index + 1)
        }
    })
    return newArray
}