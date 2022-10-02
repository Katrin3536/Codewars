function XO(str) {
    let arr = str.toLowerCase().split('');
    return arr.filter(el => el === 'x').length === arr.filter(el => el === 'o').length;
}