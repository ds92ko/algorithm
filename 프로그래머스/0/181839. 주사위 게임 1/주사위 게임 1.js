const solution = (a, b) => {
    const aIsOdd = Boolean(a % 2);
    const bIsOdd = Boolean(b % 2);
    
    if (aIsOdd && bIsOdd) return a ** 2 + b ** 2
    return aIsOdd || bIsOdd ? 2 * (a + b) : Math.abs(a - b);
}