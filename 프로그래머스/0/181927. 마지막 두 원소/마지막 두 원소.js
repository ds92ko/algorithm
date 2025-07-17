const solution = (num_list) => {
    const last = num_list.at(-1);
    const prev = num_list.at(-2);
    
    return [...num_list, last > prev ? last - prev : last * 2];
}