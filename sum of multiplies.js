function sumMul(n,m){
    let sum = 0;
    if(m>0 && n> 0) {
        for(let i = n; i <= m; i++) {
            if(i%n==0)
                sum = sum + i;
        } return sum;
    }
    return "INVALID";
}