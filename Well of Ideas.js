function well(x){
    let good = x.filter( string => {
       return string === 'good';
     })
    
    if (good.length == 0) {
      return 'Fail!';
    } else if (good.length > 2) {
      return 'I smell a series!';
    } else {
      return 'Publish!';
    }
   }