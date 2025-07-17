const solution = (a, b, c) => {
    const set = new Set([a, b, c]);
    return Array(4 - set.size)
        .fill()
        .reduce((acc, _, idx) => acc * (a ** (idx + 1) + b ** (idx + 1) + c ** (idx + 1)), 1);
}