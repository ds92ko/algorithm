const solution = numbers => numbers
    .reduce((acc, cur, idx) => acc += cur, 0) / numbers.length;