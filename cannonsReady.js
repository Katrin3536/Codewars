const cannonsReady = (gunners) => {
    let arr = Object.values(gunners)
     .some( element =>element === "nay");
     return arr ? 'Shiver me timbers!': 'Fire!'; 
   }