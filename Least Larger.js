function leastLarger(a,i) {
    return a.indexOf(Math.min(...a.filter(el=>el>a[i])))
}