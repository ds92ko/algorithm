function* generator(a, b, c) {
    yield a + b + c;
    yield a ** 2 + b ** 2 + c ** 2;
    yield a ** 3 + b ** 3 + c ** 3;
}

const solution = (a, b, c) => {
    const set = new Set([a, b, c]);
    const gen = generator(a, b, c);
    
    return Array(4 - set.size).fill().reduce(acc => acc *= gen.next().value, 1);
}