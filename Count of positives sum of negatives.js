function countPositivesSumNegatives(input) {
    if(!input || input.length === 0) {
      return [];
    }
    let sum = 0;
    let count = 0;
    
    input.forEach(item => {
      if (item < 0) {
        sum += item;
      } else if(item > 0) {
        count++;
      } 
    })
    return [ count, sum]
  }




  