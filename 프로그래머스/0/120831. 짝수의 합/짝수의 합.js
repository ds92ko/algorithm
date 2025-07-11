const solution = n => Array(n).fill().reduce((acc, cur, idx) => {
    cur = idx + 1;
    return cur % 2 === 0 ? acc + cur : acc;
}, 0);