function hello(name) {
    if (name) {
        let str = name.toLowerCase();
        let n = str[0].toUpperCase() + str.slice(1)
        return `Hello, ${n}!`;
    }
    return "Hello, World!";
}