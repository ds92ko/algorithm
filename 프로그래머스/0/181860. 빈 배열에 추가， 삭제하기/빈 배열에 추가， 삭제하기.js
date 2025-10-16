const solution = (arr, flag) => flag.reduce((acc, cur, idx) => (
    cur
    ? acc.push(...Array(arr[idx] * 2).fill(arr[idx])) 
    : acc.splice(-arr[idx], arr[idx]), acc
), []);
