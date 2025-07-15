const solution = n => {
    const smaller = [];
    const larger = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            smaller.push(i);
            if (n / i !== i) larger.unshift(n / i);
        }
    }
    
    return [...smaller, ...larger];
}