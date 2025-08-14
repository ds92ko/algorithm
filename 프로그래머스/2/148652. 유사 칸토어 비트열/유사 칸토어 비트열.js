function solution(n, l, r) {
    function countOnes(n, left, right) {
        const length = 5 ** n;

        if (n === 0) return 1;

        const blockLen = length / 5;

        let total = 0;
        const blockBits = [1, 1, 0, 1, 1];
        for (let i = 0; i < 5; i++) {
            const blockStart = i * blockLen + 1;
            const blockEnd = (i + 1) * blockLen;

            if (right < blockStart || left > blockEnd) continue;

            if (left <= blockStart && blockEnd <= right) {
                if (blockBits[i] === 1) {
                    total += countOnes(n - 1, 1, blockLen);
                } else {
                    total += 0;
                }
            } else {
                const newLeft = Math.max(left, blockStart) - blockStart + 1;
                const newRight = Math.min(right, blockEnd) - blockStart + 1;

                if (blockBits[i] === 1) {
                    total += countOnes(n - 1, newLeft, newRight);
                } else {
                    total += 0;
                }
            }
        }
        return total;
    }

    return countOnes(n, l, r);
}