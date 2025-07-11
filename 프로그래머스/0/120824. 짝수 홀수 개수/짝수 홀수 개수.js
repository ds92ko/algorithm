const solution = numList => numList.reduce((acc, cur) => {
    acc[cur & 1]++;
    return acc;
}, [0, 0]);