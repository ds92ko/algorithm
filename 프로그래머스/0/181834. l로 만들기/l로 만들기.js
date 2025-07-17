const toNumber = char => char.charCodeAt(0) - 96;

const solution = string => [...string]
    .map(str => toNumber(str) < toNumber('l') ? 'l' : str)
    .join('');