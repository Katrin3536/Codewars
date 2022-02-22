function getCount(str) {
    let arr = str.split("");
    let newArr = arr.filter(item => item === "a" ||item === "e" || item === "i" || item === "o" || item === "u"
    )

    return newArr.length;
}