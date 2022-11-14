String.prototype.toAlternatingCase = function () {
    return this.split('').map(el => {
        if (el === el.toLowerCase()) {
            return el.toUpperCase();
        } else {
            return el.toLowerCase();
        }
    }).join('');
};