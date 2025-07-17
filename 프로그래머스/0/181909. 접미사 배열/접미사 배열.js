const solution = (my_string) => [...my_string]
    .reverse()
    .reduce((acc, cur, idx) => (acc.push(`${cur}${acc[idx - 1] || ''}`), acc), [])
    .sort();