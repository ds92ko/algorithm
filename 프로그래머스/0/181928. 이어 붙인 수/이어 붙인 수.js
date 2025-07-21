const solution = (num_list) => {
    let odd = '', even = '';
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2) odd += num_list[i];
        else even += num_list[i];
    }
    
    return +odd + +even;
}