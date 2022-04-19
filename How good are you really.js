function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((prev,cur)=> prev+cur,0);
    return yourPoints>(sum/classPoints.length)
}
