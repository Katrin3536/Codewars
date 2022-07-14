function find_average(array) {
    if(array.length) {
        return array.reduce((cur,prev)=>cur+prev)/array.length
    }
    return 0;
}