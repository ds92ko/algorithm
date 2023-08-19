const solution = array => {
    const cnt = array.reduce((a, c) => (a[c] ? {...a, [c]: a[c] + 1} : {...a, [c]: 1}), {});
    const max = Math.max(...Object.values(cnt));
    const modes = Object.keys(cnt).filter(key => cnt[key] === max).map(Number);
    
    return modes.length === 1 ? modes[0] : -1;
}