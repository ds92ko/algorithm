const solution = n => {
    let cnt = 0;
    
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (!(i % j)) {
                cnt++;
                break;
            }
        }
    }
    
    return cnt;
}