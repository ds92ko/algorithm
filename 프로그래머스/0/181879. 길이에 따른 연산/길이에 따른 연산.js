const solution = num_list => num_list
    .reduce((acc, cur) => num_list.length > 10 || !acc ? acc += cur : acc *= cur, 0);