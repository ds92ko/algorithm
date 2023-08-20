const solution = (n, order = 0) => {
    while (true) {
        order++;
        if ((order * 6) % n === 0) return order;
    }
}