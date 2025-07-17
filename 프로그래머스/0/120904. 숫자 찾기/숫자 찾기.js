const solution = (num, k) => {
    const idx = [...String(num)].findIndex((s) => +s === k);
    return idx < 0 ? idx : idx + 1;
}