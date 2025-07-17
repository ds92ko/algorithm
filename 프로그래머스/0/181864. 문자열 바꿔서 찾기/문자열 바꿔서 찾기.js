const solution = (myString, pat) => +[...myString]
    .map(str => str === 'A' ? 'B' : 'A')
    .join('')
    .includes(pat);