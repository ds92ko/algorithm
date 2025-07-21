const solution = (my_string, m, c) => Array(Math.ceil(my_string.length / m))
    .fill('')
    .map((row, idx) => my_string.slice(idx * m, (idx + 1) * m)[c - 1])
    .join('');