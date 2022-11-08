function vowelOne(s){
    const arr = s.toLowerCase().split('');
    return arr.map(el => {
        return (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u')? el = 1: el = 0
    }).join('');
}


function vowelOne(s){
    return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}


