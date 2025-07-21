const solution = (arr, idx) => {
    const sliceIdx = arr.slice(idx).findIndex(Boolean);
    
    return sliceIdx > -1 ? sliceIdx + idx : -1
}