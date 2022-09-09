function last(x){
    return x.split(' ').sort((prev,cur)=>prev[prev.length - 1]>cur[cur.length -1]?1:-1)
}