const solution = (a, d, included) => included.reduce((acc, cur, idx) => {
    if (cur) acc += !idx ? a : a + d * idx;
    return acc;
}, 0);