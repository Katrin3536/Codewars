function abbrevName(name){
    let upperName = name.toUpperCase();
    let arr = upperName.split(" ");
     return arr[0][0] + "." + arr[1][0];
   }