const solution = (slice, n, order = 0) => {
    while (true) {
        order++;
        if ((order * slice) / n >= 1) return order;
    }
}