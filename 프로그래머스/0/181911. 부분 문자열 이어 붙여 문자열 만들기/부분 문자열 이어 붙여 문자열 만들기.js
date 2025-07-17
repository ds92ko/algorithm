const solution = (my_strings, parts) => my_strings.reduce((acc, cur, idx) => {
    const [s, e] = parts[idx]
    acc += cur.slice(s, e + 1);
    return acc;
}, '');