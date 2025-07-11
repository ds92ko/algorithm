const solution = n => Array.from({ length: n }).reduce((acc, cur, idx) => {
    cur = idx + 1;
    if (cur % 2 === 0) return acc + cur;
    return acc;
}, 0);