const solution = code =>
  [...code].reduce(
    ({ ret, mode }, cur, idx) =>
      cur === '1' 
        ? { ret, mode: +!mode } 
        : { ret: idx % 2 === mode ? ret + cur : ret, mode },
    { ret: '', mode: 0 }
  ).ret || 'EMPTY';