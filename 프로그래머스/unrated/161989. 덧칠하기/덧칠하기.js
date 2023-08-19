const solution = (n, m, section) => {
    let rolling = section.reduce((acc, cur, idx) => {
        if (idx === 0 || acc.prev + m <= cur) {
            acc.cnt++;
            acc.prev = cur;
        }
        return acc;
    }, { prev: section[0], cnt: 0 });
    
    return rolling.cnt;
}