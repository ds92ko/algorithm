const solution = n => {
    let sum = 0;
    for (let i = n; i > 0; i -= 2) 
        sum += n % 2 === 0 ? i ** 2 : i;
    return sum;
}