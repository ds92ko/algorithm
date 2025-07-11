const solution = numList => numList.reduce((acc, cur) => {
    acc[cur % 2]++;
    return acc;
}, [0, 0]);