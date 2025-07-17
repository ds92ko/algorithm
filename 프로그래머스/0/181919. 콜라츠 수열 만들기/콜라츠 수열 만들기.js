const solution = n => {
    const arr = [n];
    
    while (true) {
        if (n === 1) return arr;
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
        arr.push(n);
    }
}