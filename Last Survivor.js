function lastSurvivor(letters, coords) {
    let arr = letters.split('');
    for (let item of coords) {
        arr.splice(item,1);
    }

    return arr[0];
}