const solution = my_string => [...my_string.replace(/[^0-9]/g, '')]
    .reduce((acc, cur) =>  acc + +cur, 0);