function points(games) {
    let sum = 0;
     games.map( game => {
       let arr = game.split(":");
       if (arr[0] > arr[1]) {
         sum +=3;
       } else if(arr[0] < arr[1]) {
         sum;
       } else { 
         sum +=1};
     })
      return sum;
   }