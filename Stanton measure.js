function stantonMeasure(arr) {
    let firstArr = [];
    let secondArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            firstArr.push(arr[i])
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === firstArr.length) {
            secondArr.push(arr[i])
        }
    }
    return secondArr.length
}



const stantonMeasure = (arr) => {
    let count = arr.filter(n => n == 1).length;
    return arr.filter(n => n == count).length;
};

const stantonMeasure = a => a.filter(e=> e == a.filter(f=> f==1).length).length;