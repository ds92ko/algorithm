const solution = string => [...string]
    .map(str => str.charCodeAt(0) < 'l'.charCodeAt(0) ? 'l' : str)
    .join('');