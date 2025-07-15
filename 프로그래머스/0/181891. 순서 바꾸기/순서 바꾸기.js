const solution = (num_list, n) => {
    const splice = num_list.splice(n);
    return [...splice, ...num_list];
}