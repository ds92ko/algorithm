const solution = n => [...String(n)].reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
}, 0);