const solution = num_list => {
    const { product, sum } = num_list.reduce((acc, cur) => {
        acc.product *= cur;
        acc.sum += cur;
        
        return acc;
    }, { product: 1, sum: 0 });
    
    return +(product < sum ** 2);
}