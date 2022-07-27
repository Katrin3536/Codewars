function divCon(x){
    return x.reduce((prev,cur)=>typeof cur ==='number'? prev+cur:prev - Number(cur),0)
}