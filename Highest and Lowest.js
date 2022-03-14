function highAndLow(numbers){
    let arr = numbers.split(" ")
    let maxInt = Math.max(...arr)
    let minInt = Math.min(...arr)
    return`${maxInt} ${minInt}`
}