function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((prev, cur) => prev + cur, 0)
}