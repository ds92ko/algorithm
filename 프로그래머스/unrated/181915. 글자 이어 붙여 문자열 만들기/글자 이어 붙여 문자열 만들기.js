const solution = (str, idxList) => idxList.reduce((acc, cur) => {
    acc += str[cur];
    return acc;
}, '');