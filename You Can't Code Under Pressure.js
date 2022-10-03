function Counter() {
    this.value = 0
    this.increment = function () {
        this.value++
    }
    this.check = function () {
        return this.value
    }
}