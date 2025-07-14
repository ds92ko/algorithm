const discountMap = [
    [500000, 20],
    [300000, 10],
    [100000, 5]
];

const solution = price => {
    for (const [threshold, rate] of discountMap) {
        if (price >= threshold)
            return ~~(price - (price * (rate * 0.01)));
    }
    return price;
}