function findDifference(a, b) {
    const multA = a.reduce((acc, cur) => acc * cur);
    const multB = b.reduce((acc, cur) => acc * cur);
    return multA > multB ? multA - multB : multB - multA;
}