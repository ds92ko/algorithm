const solution = n => Array.from({ length: n }).reduce((acc, cur, idx) => {
    cur = idx + 1;
    return cur % 2 === 0 ? acc + cur : acc;
}, 0);