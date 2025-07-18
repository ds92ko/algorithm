const solution = num_list => {
    const sum = [0, 0];
    
    for (let i = 0; i < num_list.length; i++)
        sum[i % 2] += num_list[i];
    
    return Math.max(...sum);
}