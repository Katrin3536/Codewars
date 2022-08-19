function isPythagoreanTriple(integers) {
    let maxInt=Math.max(...integers);
    let arr = integers.filter(item=> item!==maxInt)
    return Math.pow(maxInt,2)=== Math.pow(arr[0],2) + Math.pow(arr[1],2)
}