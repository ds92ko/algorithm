const rspMap = new Map([
    ['2', '0'],
    ['0', '5'],
    ['5', '2']
]);

const solution = rsp => [...rsp].map(answer => rspMap.get(answer)).join('');