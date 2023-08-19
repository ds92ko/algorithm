const solution = array => {
    const numArr = array.sort((a, b) => a - b);
    
    return numArr[~~(numArr.length / 2)];
}