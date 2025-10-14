const solution = (a, d, included) => included.reduce((acc, cur, idx) => {
    const num = !idx ? a : acc.arr[idx - 1] + d;

    acc.arr.push(num);
    if (cur) acc.ans += num;
    
    return acc;
}, { arr: [], ans: 0 }).ans;