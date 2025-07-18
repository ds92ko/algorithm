const solution = n => Array(n).fill().map((arr, idx) => {
    arr = Array(n).fill(0);
    arr[idx] = 1;

    return arr;
});