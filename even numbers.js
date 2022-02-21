function isVeryEvenNumber(n) {
    let arr = n.toString().split("");
     let m = arr.reduce((sum, el) => sum + +el, 0);
      
      if (m > 9) {
        return isVeryEvenNumber(m);
      } 
      
      return m % 2 === 0;
    }