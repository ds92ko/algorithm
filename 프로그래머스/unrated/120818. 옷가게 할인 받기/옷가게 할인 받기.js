const discountMap = new Map([
    [100000, 5],
    [300000, 10],
    [500000, 20]
]);

const solution = price => {
    const descendingOrder = new Map([...discountMap].sort((a, b) => b[0] - a[0]));
    
    for (const [threshold, rate] of descendingOrder) {
        if (price >= threshold)
            return ~~(price - (price * (rate * 0.01)));
    }
    return price;
}