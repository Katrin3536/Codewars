reverse = function (array) {
    let a = [];
    for (i = 0; i < array.length; i++) {
        a[i] = array[(array.length - 1) - i]
    }
    return a
}