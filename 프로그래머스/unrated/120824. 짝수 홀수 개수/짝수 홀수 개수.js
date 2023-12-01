const solution = numList => numList.reduce((acc, cur) => {
    cur % 2 === 0 ? acc[0] += 1 : acc[1] += 1;
    return acc;
}, [0, 0]);