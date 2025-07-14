const discountMap = new Map([
    [100000, 5],
    [300000, 10],
    [500000, 20]
].sort((a, b) => b[0] - a[0]));

const solution = price => {
    for (const [threshold, rate] of discountMap) {
        if (price >= threshold)
            return ~~(price - (price * (rate * 0.01)));
    }
    return price;
}