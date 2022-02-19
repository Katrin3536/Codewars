function countPositivesSumNegatives(input) {
    if(!input || input.length === 0) {
      return [];
    }
   return  input.reduce( (prev, cur ) => {
     if (cur < 0) {
          prev[1] += cur;
        } else if(cur > 0) {
          prev[0]++;
        } 
     return prev
   }, [0,0])
  }