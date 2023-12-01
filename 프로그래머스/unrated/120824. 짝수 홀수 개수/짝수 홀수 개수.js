const solution = numList => numList.reduce((acc, cur) => {
    cur % 2 === 0 ? acc[0]++ : acc[1]++;
    return acc;
}, [0, 0]);