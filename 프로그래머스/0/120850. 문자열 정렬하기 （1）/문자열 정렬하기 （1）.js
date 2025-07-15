const solution = my_string => [...my_string.replace(/[^0-9]/g, '')]
    .map(Number)
    .sort((a, b) => a - b);