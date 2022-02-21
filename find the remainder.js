
  function remainder(n, m){
    if ( n % 0 || m % 0) {
      return NaN;
    } else
    if (n > m) {
      return n % m;
    } 
    return m % n;
  }