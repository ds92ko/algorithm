const solution = (array, height) => {
    const sorted = array.sort((a, b) => b - a);
    let count = 0;
    while (count < sorted.length && sorted[count] > height) count++;
    return count;
}